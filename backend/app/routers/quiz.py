from fastapi import APIRouter
from app.services.scraper import scrape_wikipedia
from app.database import SessionLocal
from app.models import Quiz, Question

router = APIRouter(prefix="/quiz")

@router.post("/")
def generate(data: dict):
    db = SessionLocal()

    # 1️⃣ Check if quiz already exists (CACHE)
    existing = db.query(Quiz).filter(Quiz.url == data["url"]).first()
    if existing:
        questions = db.query(Question).filter(
            Question.quiz_id == existing.id
        ).all()

        db.close()

        return {
            "id": existing.id,
            "title": existing.title,
            "summary": existing.summary,
            "quiz": [
                {
                    "question": q.question,
                    "options": q.options,
                    "answer": q.answer,
                    "difficulty": q.difficulty,
                    "explanation": q.explanation
                }
                for q in questions
            ]
        }

    # 2️⃣ Otherwise, generate new quiz
    title, summary = scrape_wikipedia(data["url"])

    quiz_data = [
        {
            "question": f"What is {title} best known for?",
            "options": ["Art", "Science", "Sports", "Politics"],
            "answer": "Science",
            "difficulty": "easy",
            "explanation": "Based on article summary."
        }
    ]

    quiz = Quiz(url=data["url"], title=title, summary=summary)
    db.add(quiz)
    db.commit()
    db.refresh(quiz)

    quiz_id = quiz.id

    for q in quiz_data:
        db.add(
            Question(
                quiz_id=quiz_id,
                question=q["question"],
                options=q["options"],
                answer=q["answer"],
                difficulty=q["difficulty"],
                explanation=q["explanation"]
            )
        )

    db.commit()
    db.close()

    return {
        "id": quiz_id,
        "title": title,
        "summary": summary,
        "quiz": quiz_data
    }
