from pydantic import BaseModel
from typing import Optional

class UserSchema(BaseModel):
    name: str
    email: str
    phone_number: str
    password: str
    is_admin: Optional[bool] = False