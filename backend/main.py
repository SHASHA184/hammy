from fastapi import FastAPI
from fastapi_admin.app import app as admin_app
from fastapi_admin.models import Admin
from fastapi_admin.providers.login import UsernamePasswordProvider
import importlib
import os
import pkgutil
import aioredis
# from database.models.category import Category
# from database.models.product import Product
# from database.models.product_image import ProductImage
# from database.models.user import User
# from database.models.order import Order
# from database.models.order_item import OrderItem
# from database.models.order_item import OrderItem


app = FastAPI()

@app.on_event("startup")
async def startup():
    redis = await aioredis.create_redis_pool(address='redis://localhost')
    await admin_app.configure(
        logo_url="https://preview.tabler.io/static/logo-white.svg",
        template_folders=["templates"],
        providers=[
            UsernamePasswordProvider(
                login_logo_url="https://preview.tabler.io/static/logo.svg", admin_model=Admin
            )
        ],
        redis=redis,
    )


def include_routers(app):
    package_dir = os.path.join(os.path.dirname(__file__), "resources")
    for _, module_name, is_pkg in pkgutil.iter_modules([package_dir]):
        if is_pkg:
            module = importlib.import_module(f"resources.{module_name}.{module_name}")
            if hasattr(module, "router"):
                app.include_router(module.router)

include_routers(app)