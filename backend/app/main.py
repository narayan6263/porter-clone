import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import ensure_indexes
from app.routes.auth import router as auth_router

DEFAULT_ORIGINS = "http://localhost:5173,http://127.0.0.1:5173"
ALLOWED_ORIGINS = [
	origin.strip()
	for origin in os.getenv("FRONTEND_ORIGINS", DEFAULT_ORIGINS).split(",")
	if origin.strip()
]


@asynccontextmanager
async def lifespan(app: FastAPI):
	await ensure_indexes()
	yield


app = FastAPI(title="Porter Clone API", lifespan=lifespan)

app.add_middleware(
	CORSMiddleware,
	allow_origins=ALLOWED_ORIGINS,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/v1/auth", tags=["auth"])


@app.get("/")
async def root() -> dict[str, str]:
	return {"message": "Porter Clone API is running"}
