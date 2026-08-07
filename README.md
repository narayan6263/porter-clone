# Porter Clone

## Architecture & Workflow Reference

This repository is building an intra-city logistics platform, not a passenger ride-hailing app. The core booking object is a delivery of goods between pickup and drop locations, matched to a nearby driver with an appropriate vehicle.

The first release focuses on the core loop:

1. Customer enters pickup, drop, and vehicle type.
2. Backend calculates a fare estimate.
3. Customer confirms the booking.
4. Nearest available driver is matched.
5. Customer sees driver details, ETA, and live location.
6. Driver completes the delivery.
7. Payment is settled and the customer rates the trip.

## Tech Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Frontend | React + Vite + Tailwind | Already scaffolded in `porter_frontend/` |
| Backend | FastAPI (Python) | Async, Swagger docs at `/docs` |
| Database | MongoDB | Via `motor` |
| Auth | JWT access tokens | `python-jose` + `passlib[bcrypt]` |
| Real-time tracking | Polling first, WebSocket later | Start simple, upgrade once the core flow works |
| Maps / geolocation | Browser Geolocation API + free tiles | Leaflet + OpenStreetMap is the preferred baseline |
| Version control | Git flow | `main`, `develop`, and `feature/*` branches |

## System Architecture

The client talks to a single FastAPI backend backed by one MongoDB database. The backend is split into four logical service areas, each implemented as FastAPI routers and Mongo collections rather than separate deployed microservices:

- Auth service: registration, login, JWT issue/verify.
- Booking service: fare calculation, booking requests, booking status.
- Driver and vehicle service: driver profiles, vehicle types, availability, live GPS position.
- Payment and notification service: invoice generation, payment status, push/SMS-style notifications.

This keeps the project small enough for a college team while still letting each person own a clear slice of the codebase.

## Core User Flow

### Customer Flow

1. Request ride: enter pickup, drop, and select vehicle type.
2. Fare estimate: backend computes price from distance and vehicle type.
3. Confirm booking: booking is created with status `searching`.
4. Driver matched: nearest available driver is assigned and status becomes `matched`.
5. Live tracking: driver location is polled or streamed and status becomes `in_transit`.
6. Trip complete: status becomes `completed`, payment settles, and the customer rates the trip.

### Driver Flow

1. Driver registers and uploads vehicle details.
2. Driver goes online and sets availability to true.
3. Driver receives booking requests.
4. Driver accepts a request and gets assigned to the booking.
5. Driver updates location periodically while navigating.
6. Driver completes the trip and triggers settlement.

## API Design

All routes are prefixed with `/api/v1`. Protected routes require `Authorization: Bearer <token>`.

### Auth Service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/auth/register` | Create a customer or driver account |
| POST | `/auth/login` | Verify credentials and return JWT |
| GET | `/auth/me` | Return the current logged-in user |

### Booking Service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/bookings/fare-estimate` | Return an estimated fare |
| POST | `/bookings` | Create a new booking request |
| GET | `/bookings/{id}` | Get booking details and status |
| GET | `/bookings/me` | List current user bookings |
| PATCH | `/bookings/{id}/status` | Update status |

### Driver & Vehicle Service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/drivers/register` | Register as a driver and submit vehicle info |
| PATCH | `/drivers/availability` | Toggle online or offline |
| PATCH | `/drivers/location` | Push current GPS coordinates |
| GET | `/drivers/nearby` | Find nearest available drivers |
| GET | `/drivers/requests` | Poll incoming booking requests |

### Payment & Notification Service

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/payments/{booking_id}` | Settle payment for a completed booking |
| GET | `/payments/{booking_id}` | Get payment and invoice status |
| POST | `/notifications` | Trigger a notification on booking status change |

## MongoDB Collections

- `users`: `_id, name, email, password_hash, role, phone, created_at`
- `drivers`: `_id, user_id, vehicle_type, vehicle_number, is_available, current_location, rating`
- `bookings`: `_id, customer_id, driver_id, pickup, drop, vehicle_type, fare, status, created_at, completed_at`
- `payments`: `_id, booking_id, amount, status, method, created_at`
- `ratings`: `_id, booking_id, customer_id, driver_id, rating, comment`

## Repo Structure

```text
porter-clone/
├── porter_frontend/     ← React app (Vite + Tailwind)
├── backend/
│   └── app/
│       ├── main.py
│       ├── database.py
│       ├── models/
│       ├── routes/
│       └── utils/
├── docs/
│   └── ARCHITECTURE.md
└── README.md
```

## Suggested Team Split

- Person A: Auth service.
- Person B: Booking service.
- Person C: Driver and vehicle service.
- Person D: Frontend integration.

Payments and notifications can be built after the core booking loop works.

## Milestones

| Milestone | Status |
| --- | --- |
| M1 - Auth works end to end | In progress: backend scaffold is in place, frontend login/register wiring still pending |
| M2 - Booking loop without real matching | Planned |
| M3 - Real driver matching | Planned |
| M4 - Live tracking | Planned |
| M5 - Payment and rating | Planned |

## Canonical Architecture Doc

The full source-of-truth version of this document lives in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).