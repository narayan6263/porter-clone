from fastapi import FastAPI

from app.routes.booking import router as booking_router


app = FastAPI(
    title="Porter Clone API",
    version="1.0.0"
)


app.include_router(
    booking_router,
    prefix="/api/v1"
)


@app.get("/")
def root():
    return {
        "message": "Porter Clone API is running"
    }