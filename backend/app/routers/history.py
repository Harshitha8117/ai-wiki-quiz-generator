from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models

router = APIRouter()  # ❗ NO prefix

@router.get("/")
def get_history(db: Session = Depends(get_db)):
    return db.query(models.Quiz).all()
