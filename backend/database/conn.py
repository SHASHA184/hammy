import os
from typing import AsyncGenerator
from dotenv import load_dotenv
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env.local')
load_dotenv(dotenv_path)
from fastapi import HTTPException
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

# TODO import from setup.py
url = f"postgresql+asyncpg://{os.getenv('POSTGRES_USER')}:" \
    f"{os.getenv('POSTGRES_PASSWORD')}@" \
    f"{os.getenv('POSTGRES_HOST')}:{os.getenv('POSTGRES_PORT')}/" \
    f"{os.getenv('POSTGRES_DB')}"

engine = create_async_engine(
    url,
    future=True,
    echo=False,
)

# expire_on_commit=False will prevent attributes from being expired
# after commit.
async_session = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)


# Dependency
async def get_db() -> AsyncGenerator:
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except SQLAlchemyError as sql_ex:
            await session.rollback()
            raise sql_ex
        except HTTPException as http_ex:
            await session.rollback()
            raise http_ex
        finally:
            await session.close()
