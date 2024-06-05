from pydantic import BaseModel, Field, validator
from typing import Optional
import re

class UserRegisterSchema(BaseModel):
    name: Optional[str] = Field(None, example="Alice Johnson")
    email: str = Field(..., example="alice@example.com")
    password: str = Field(..., example="securePassword123") 
    phone_number: Optional[str] = Field(None, example="+380501234567")

    @validator("phone_number")
    def validate_phone_number(cls, v):
        if v is not None and not re.match(r"^\+\d{1,3}\d{3,15}$", v):
            raise ValueError("Invalid phone number")
        return v
    
    @validator("email")
    def validate_email(cls, v):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", v):
            raise ValueError("Invalid email address")
        return v
    
class UserLoginSchema(BaseModel):
    email: str = Field(..., example="alice@example.com")
    password: str = Field(..., example="securePassword123")

class UserGoogleSchema(BaseModel):
    token: str = Field(..., example="ya29.a0AfH6SMCi...")

class UserSchema(BaseModel):
    id: Optional[int] = Field(None, example=12345)
    name: Optional[str] = Field(None, example="Alice Johnson")
    email: str = Field(..., example="alice@example.com")
    phone_number: Optional[str] = Field(None, example="+380501234567")
    is_admin: bool = Field(False, example=True)
    picture: Optional[str] = Field(None, example="https://example.com/profile.jpg")
    token: Optional[str] = Field(None, example="ya29.a0AfH6SMCi...")
