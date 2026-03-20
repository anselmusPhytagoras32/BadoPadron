from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import owner
from db.base import Base
from db.session import engine
from routes import user, owner 

import db.models.user
import db.models.measurement
import db.models.order

# I will only use this for testing
# Remove this later after migrating to alembic
# This just initializes tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SukatAPI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Replace "*" later with the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register isolated route
app.include_router(user.router, prefix="/api", tags=["Customers"])
app.include_router(owner.router, prefix="/api", tags=["Owner"])
