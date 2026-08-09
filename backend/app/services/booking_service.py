from math import radians, sin, cos, sqrt, atan2


VEHICLE_RATES = {
    "bike": {
        "base_fare": 40,
        "per_km": 12
    },
    "mini_truck": {
        "base_fare": 80,
        "per_km": 18
    },
    "pickup": {
        "base_fare": 120,
        "per_km": 25
    }
}


def calculate_distance(
    pickup_lat: float,
    pickup_lng: float,
    drop_lat: float,
    drop_lng: float
) -> float:

    earth_radius_km = 6371

    lat1 = radians(pickup_lat)
    lat2 = radians(drop_lat)

    delta_lat = radians(drop_lat - pickup_lat)
    delta_lng = radians(drop_lng - pickup_lng)

    a = (
        sin(delta_lat / 2) ** 2
        + cos(lat1)
        * cos(lat2)
        * sin(delta_lng / 2) ** 2
    )

    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    return round(earth_radius_km * c, 2)


def calculate_fare(
    distance_km: float,
    vehicle_type: str
) -> float:

    rate = VEHICLE_RATES[vehicle_type]

    fare = (
        rate["base_fare"]
        + distance_km * rate["per_km"]
    )

    return round(fare, 2)