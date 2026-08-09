import os

import certifi
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "porter_clone")

client = AsyncIOMotorClient(MONGO_URI, tlsCAFile=certifi.where())
db = client[MONGO_DB_NAME]

users_collection = db["users"]


async def ensure_indexes() -> None:
    await users_collection.create_index("email", unique=True)
