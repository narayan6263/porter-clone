from pydantic import BaseModel, Field
from typing import Optional, Literal


class Location(BaseModel):
    address: Optional[str] = None
    lat: float
    lng: float


class FareEstimateRequest(BaseModel):
    pickup: Location
    drop: Location
    vehicle_type: Literal["bike", "mini_truck", "pickup"]


class FareEstimateResponse(BaseModel):
    distance_km: float
    estimated_fare: float


class BookingCreate(BaseModel):
    pickup: Location
    drop: Location
    vehicle_type: Literal["bike", "mini_truck", "pickup"]


class BookingStatusUpdate(BaseModel):
    status: Literal[
        "matched",
        "in_transit",
        "completed",
        "cancelled"
    ]