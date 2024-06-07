from fastapi import APIRouter, HTTPException
from google.oauth2 import id_token
from google.auth.transport import requests
from database.schemas.user import (
    UserRegisterSchema,
    UserLoginSchema,
    UserGoogleSchema,
    UserSchema,
)
from database.models.user import User
from utils import hash_password
import traceback
from loguru import logger
from database.conn import get_db
from fastapi import Depends
from sqlalchemy.orm import Session
from typing import Union

router = APIRouter()

@router.post("/users/register")
async def register(user: UserRegisterSchema, db: Session = Depends(get_db)) -> Union[UserSchema, dict]:
    email = user.email
    if await User.check_user_exists(db, email):
        return {"error": "User already exists"}
    try:
        user.password = hash_password(user.password)
        logger.info(f"Registering user {user.dict()}")
        user_instance = await User.create(db, user.dict())
        return user_instance
    except Exception as e:
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=400, detail="Invalid data")


@router.post("/users/login")
async def login(
    user: UserLoginSchema, db: Session = Depends(get_db)
) -> Union[UserSchema, dict]:
    email = user.email
    password = user.password
    user = await User.authenticate(db, email, password)
    if user is None:
        raise HTTPException(status_code=400, detail="Invalid data")
    return user


@router.post("/users/google")
async def google_login(user: UserGoogleSchema, db: Session = Depends(get_db)) -> Union[UserSchema, dict]:
    try:
        token = user.token
        id_info = id_token.verify_oauth2_token(token, requests.Request())
        email = id_info.get("email")
        name = id_info.get("name")
        picture = id_info.get("picture")
        check_user = await User.check_user_exists(db, email)
        if check_user:
            return UserSchema(**check_user.__dict__, token=token)
        user = dict(email=email, name=name, picture=picture)
        logger.info(f"Registering user {user}")
        user_instance = await User.create(db, user)
        return UserSchema(**user_instance.__dict__, token=token)
    except Exception as e:
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=400, detail="Invalid token")
    
@router.post("/users/update")
async def update_user(user: UserSchema, db: Session = Depends(get_db)) -> Union[UserSchema, dict]:
    user = await User.update_user(db, user.dict())
    return user