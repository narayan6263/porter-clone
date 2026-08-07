# Porter Clone — Architecture & Workflow Reference

This is the single source of truth for how the project is being built. Keep this document updated as the implementation changes.

## 1. What we're building

Porter is an intra-city logistics platform. It connects customers who need something moved with nearby drivers who have a vehicle. It is not a passenger ride-hailing app; the core object being booked is a delivery of goods.

The first release focuses on the core loop:

1. Customer opens the app, enters pickup and drop location, picks a vehicle type.
2. App shows a fare estimate.
3. Customer confirms and the nearest available driver is matched.
4. Customer sees driver details, ETA, and live location on a map.
5. Driver completes the delivery, payment is settled, and the customer rates the trip.

Advanced features like scheduled bookings, multi-stop, B2B accounts, and wallet come later.

## 2. Tech stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Frontend | React + Vite + Tailwind | Already scaffolded in `porter_frontend/` |
| Backend | FastAPI (Python) | Async, Swagger docs at `/docs` |
| Database | MongoDB | Via `motor` |
| Auth | JWT access token | `python-jose` + `passlib[bcrypt]` for hashing |
| Real-time tracking | Polling first, WebSocket later | Start with polling, upgrade once the core flow works |
| Maps / geolocation | Browser Geolocation API + free map tiles | Leaflet + OpenStreetMap is the preferred baseline |
| Version control | Git | `main`, `develop`, and `feature/*` branches |

## 3. System architecture

The client talks to a single FastAPI backend backed by one MongoDB database. The backend is split into four logical service areas, each implemented as FastAPI routers and Mongo collections rather than separate deployed microservices.

- Auth service: registration, login, JWT issue/verify.
- Booking service: fare calculation, booking requests, booking status.
- Driver and vehicle service: driver profiles, vehicle types, availability, live GPS position.
- Payment and notification service: invoice generation, payment status, push/SMS-style notifications.

This gives enough separation for a 4-person college project without the overhead of running multiple deployed services.

## 4. Core user flow (customer)

1. Request ride: enter pickup, drop, and select vehicle type.
2. Fare estimate: backend computes price from distance and vehicle type.
3. Confirm booking: booking request is created, status = `searching`.
4. Driver matched: nearest available driver is assigned, status = `matched`.
5. Live tracking: driver location is streamed or polled, status = `in_transit`.
6. Trip complete: status = `completed`, payment is settled, and the customer rates the trip.

## 5. Core flow (driver)

1. Driver registers and uploads vehicle details.
2. Driver goes online and sets availability = true.
3. Driver receives booking requests.
4. Driver accepts and booking status becomes `matched`.
5. Driver periodically posts location updates.
6. Driver completes the trip and marks status = `completed`.

## 6. API design

All routes are prefixed with `/api/v1`. Auth-protected routes require `Authorization: Bearer <token>`.

### Auth service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/auth/register` | Create a customer or driver account |
| POST | `/auth/login` | Verify credentials and return JWT |
| GET | `/auth/me` | Return current logged-in user |

### Booking service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/bookings/fare-estimate` | Given pickup, drop, and vehicle type, return estimated fare |
| POST | `/bookings` | Create a new booking request |
| GET | `/bookings/{id}` | Get booking status and details |
| GET | `/bookings/me` | List current user's bookings |
| PATCH | `/bookings/{id}/status` | Update status (matched, in_transit, completed, cancelled) |

### Driver and vehicle service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/drivers/register` | Register as a driver and submit vehicle info |
| PATCH | `/drivers/availability` | Toggle online/offline |
| PATCH | `/drivers/location` | Push current GPS coordinates |
| GET | `/drivers/nearby` | Find nearest available drivers for a pickup point |
| GET | `/drivers/requests` | Driver polls for incoming booking requests |

### Payment and notification service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/payments/{booking_id}` | Settle payment for a completed booking |
| GET | `/payments/{booking_id}` | Get payment and invoice status |
| POST | `/notifications` | Trigger a notification on booking status change |

## 7. Database collections (MongoDB)

- `users` — `_id, name, email, password_hash, role, phone, created_at`
- `drivers` — `_id, user_id, vehicle_type, vehicle_number, is_available, current_location, rating`
- `bookings` — `_id, customer_id, driver_id, pickup, drop, vehicle_type, fare, status, created_at, completed_at`
- `payments` — `_id, booking_id, amount, status, method, created_at`
- `ratings` — `_id, booking_id, customer_id, driver_id, rating, comment`

## 8. Repo structure & ownership

```text
porter-clone/
├── porter_frontend/     ← React app (Vite + Tailwind)
├── backend/
│   └── app/
│       ├── main.py
│       ├── database.py
│       ├── models/      ← Pydantic schemas per service
│       ├── routes/      ← auth.py, bookings.py, drivers.py, payments.py
│       └── utils/       ← auth.py (JWT/hashing), matching.py (nearest-driver logic)
├── docs/
│   └── ARCHITECTURE.md  ← this file
└── README.md
```

Suggested team split:

- Person A: Auth service.
- Person B: Booking service.
- Person C: Driver and vehicle service.
- Person D: Frontend integration.

Payments and notifications can be built after the core booking loop works.

## 9. Suggested milestones

| Milestone | Status |
| --- | --- |
| M1 - Auth works end to end | In progress: backend auth scaffold exists, frontend wiring still pending |
| M2 - Booking loop without real matching | Planned |
| M3 - Real driver matching | Planned |
| M4 - Live tracking | Planned |
| M5 - Payment and rating | Planned |

Keep these statuses updated as implementation progresses.
