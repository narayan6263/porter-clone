from pydantic import BaseModel, EmailStr, Field
from typing import Literal
from datetime import datetime

class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(min_length=6)
    role: Literal["customer", "driver"] = "customer"

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: str
    name: str
    email: EmailStr
    role: str

class UserInDB(BaseModel):
    name: str
    email: EmailStr
    password_hash: str
    role: str
    created_at: datetime = Field(default_factory=datetime.utcnow)