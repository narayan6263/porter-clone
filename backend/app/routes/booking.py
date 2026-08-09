from fastapi import APIRouter

from app.schemas.booking import (
    FareEstimateRequest,
    FareEstimateResponse
)

from app.services.booking_service import (
    calculate_distance,
    calculate_fare
)


router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"]
)


@router.post(
    "/fare-estimate",
    response_model=FareEstimateResponse
)
def fare_estimate(data: FareEstimateRequest):

    distance = calculate_distance(
        data.pickup.lat,
        data.pickup.lng,
        data.drop.lat,
        data.drop.lng
    )

    fare = calculate_fare(
        distance,
        data.vehicle_type
    )

    return FareEstimateResponse(
        distance_km=distance,
        estimated_fare=fare
    )