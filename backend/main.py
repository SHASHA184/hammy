from fastapi import FastAPI
import importlib
import os
import pkgutil

app = FastAPI()

def include_routers(app):
    package_dir = os.path.join(os.path.dirname(__file__), 'resources')
    for _, module_name, is_pkg in pkgutil.iter_modules([package_dir]):
        if is_pkg:
            module = importlib.import_module(f"resources.{module_name}.{module_name}")
            if hasattr(module, "router"):
                app.include_router(module.router)

include_routers(app)