from fastapi import FastAPI

from app.database import close_mongo_connection, connect_to_mongo
from app.routes.auth import router as auth_router

app = FastAPI(title="Porter Clone Backend")


@app.on_event("startup")
async def startup_event() -> None:
    await connect_to_mongo()


@app.on_event("shutdown")
async def shutdown_event() -> None:
    await close_mongo_connection()


@app.get("/")
async def health_check() -> dict[str, str]:
    return {"message": "Porter backend is running"}


app.include_router(auth_router, prefix="/auth", tags=["Auth"])
