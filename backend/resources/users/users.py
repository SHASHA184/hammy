from fastapi import APIRouter

router = APIRouter()


@router.get("/users/")
def read_users():
    return [{"user_id": 1, "name": "John Doe"}, {"user_id": 2, "name": "Alice"}]
