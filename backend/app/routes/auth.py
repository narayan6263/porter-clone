from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_database
from app.models.user import TokenResponse, UserLogin, UserPublic, UserRegister
from app.utils.auth import create_access_token, get_password_hash, verify_password

router = APIRouter()


@router.post("/register", response_model=UserPublic, status_code=status.HTTP_201_CREATED)
async def register_user(
    payload: UserRegister, db: AsyncIOMotorDatabase = Depends(get_database)
) -> UserPublic:
    users_collection = db["users"]

    existing_user = await users_collection.find_one({"email": payload.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists",
        )

    user_document = {
        "name": payload.name,
        "email": payload.email,
        "password": get_password_hash(payload.password),
    }

    result = await users_collection.insert_one(user_document)

    return UserPublic(
        id=str(result.inserted_id), name=payload.name, email=payload.email
    )


@router.post("/login", response_model=TokenResponse)
async def login_user(
    payload: UserLogin, db: AsyncIOMotorDatabase = Depends(get_database)
) -> TokenResponse:
    users_collection = db["users"]

    user = await users_collection.find_one({"email": payload.email})
    if not user or not verify_password(payload.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    access_token = create_access_token(
        data={"sub": str(user["_id"]), "email": user["email"]}
    )

    return TokenResponse(access_token=access_token)
