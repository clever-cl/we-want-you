  
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from pydantic import ValidationError
from sqlalchemy.orm import Session
from starlette import status

import crud, models, schemas
from database import SessionLocal
from settings import settings


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()