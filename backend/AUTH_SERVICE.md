# Auth Service — Progress Notes

Owner: Bhanuveer Singh (`feature/auth-backend`)
Status: **Done and tested** — register, login, and "who am I" all work end to end against a real MongoDB Atlas database.

This file exists so anyone working on Booking, Driver/Vehicle, or Frontend can understand what's built here without reading through the code first, and know where to look if something breaks.

## 1. What's implemented

| Method | Route | What it does |
| --- | --- | --- |
| POST | `/api/v1/auth/register` | Creates a customer or driver account. Hashes the password, stores the user, returns a JWT. |
| POST | `/api/v1/auth/login` | Verifies email + password, returns a JWT. |
| GET | `/api/v1/auth/me` | Returns the logged-in user's info. Requires a valid JWT. |

All three match the contract in the top-level `README.md` (section 6, Auth service).

## 2. How the pieces fit together

```text
backend/app/
├── main.py           ← FastAPI app, CORS setup, mounts the auth router
├── database.py        ← MongoDB connection (Motor), users_collection, index setup
├── models/user.py      ← Pydantic schemas: UserCreate, UserLogin, UserOut, UserInDB
├── routes/auth.py      ← the 3 endpoints above
└── utils/auth.py       ← password hashing, JWT create/verify, get_current_user, require_role
```

## 3. Request / response examples

### Register
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "secret123",
  "role": "customer"   // or "driver" — optional, defaults to "customer"
}
```
Response `201`:
```json
{ "access_token": "eyJhbGciOi...", "token_type": "bearer" }
```
Returns `400` if the email is already registered.

### Login
```
POST /api/v1/auth/login
Content-Type: application/json

{ "email": "alice@example.com", "password": "secret123" }
```
Response `200`: same shape as register (`access_token`, `token_type`).
Returns `401` on wrong email/password.

### Me
```
GET /api/v1/auth/me
Authorization: Bearer <access_token>
```
Response `200`:
```json
{ "id": "...", "name": "Alice", "email": "alice@example.com", "role": "customer" }
```
Returns `401` if the token is missing/invalid/expired.

Full interactive docs (try requests in the browser): run the server, then open `http://localhost:8000/docs`.

## 4. For Booking / Driver service: how to protect your own routes

Import from `app.utils.auth`:

```python
from fastapi import Depends
from app.utils.auth import get_current_user, require_role

# any logged-in user (customer or driver)
@router.get("/bookings/me")
async def my_bookings(current_user: dict = Depends(get_current_user)):
    ...

# driver-only route
@router.patch("/drivers/availability")
async def set_availability(current_user: dict = Depends(require_role("driver"))):
    ...

# multiple roles allowed
@router.get("/something")
async def handler(current_user: dict = Depends(require_role("customer", "driver"))):
    ...
```

`current_user` is the raw MongoDB user document (dict) — has `_id`, `name`, `email`, `role`, `password_hash`, `created_at`.

## 5. For Frontend: what you need to know

- CORS is enabled for `http://localhost:5173` and `http://127.0.0.1:5173` (Vite's default dev port) by default.
- If your dev server runs on a different port, set `FRONTEND_ORIGINS` in `backend/.env` (comma-separated list of allowed origins) instead of asking me to change code.
- Store `access_token` after register/login (e.g. localStorage), send it back as `Authorization: Bearer <token>` on every protected request.
- Token expires after `JWT_EXPIRE_MINUTES` (see `.env`, currently 60 min). There's no refresh-token flow yet — after expiry, the user just has to log in again.

## 6. How to run the backend locally

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Server runs at `http://localhost:8000`, Swagger docs at `http://localhost:8000/docs`.

You'll need a `backend/.env` file (not committed — gitignored) with:
```
MONGO_URI=<your MongoDB connection string>
MONGO_DB_NAME=porter_clone
JWT_SECRET=<any long random string>
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=60
```
Ask Bhanuveer for a working `MONGO_URI` (Atlas) if you don't have your own, or point it at a local MongoDB instance.

## 7. Gotchas already hit and fixed (so you don't lose time on the same ones)

- **`bcrypt` version matters.** `passlib==1.7.4` (used for password hashing) breaks with `bcrypt>=4.1` — it crashes with `password cannot be longer than 72 bytes` even for short passwords. Fixed by pinning `bcrypt==4.0.1` in `requirements.txt`. If you `pip install` something that upgrades bcrypt, hashing will break again.
- **MongoDB Atlas + macOS SSL.** Connecting to Atlas from a local Python venv on macOS can fail with `CERTIFICATE_VERIFY_FAILED`. Fixed by using the `certifi` package's CA bundle in `database.py`. Already handled — nothing you need to do.

## 8. Not built yet (out of scope for now, per the main README's milestone plan)

- Password reset / forgot password
- Email verification
- Refresh tokens (JWT just expires; user re-logs in)
- Rate limiting on login

## 9. Stuck? Check here first

- `GET /` on the running server should return `{"message": "Porter Clone API is running"}` — if that fails, the server itself isn't up.
- `401` on `/me` almost always means either no `Authorization` header, an expired token, or a token signed with a different `JWT_SECRET` than the one currently in `.env`.
- CORS errors in the browser console usually mean your frontend's origin isn't in `FRONTEND_ORIGINS`.
- If none of this explains it, ping Bhanuveer.
