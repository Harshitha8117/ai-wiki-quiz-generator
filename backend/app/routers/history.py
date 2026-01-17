from fastapi import APIRouter
from app.database import SessionLocal
from app.models import Quiz

router = APIRouter()

@router.get("/")
def get_history():
    db = SessionLocal()
    quizzes = db.query(Quiz).all()
    db.close()

    return [
        {
            "id": q.id,
            "url": q.url,
            "title": q.title,
        }
        for q in quizzes
    ]
