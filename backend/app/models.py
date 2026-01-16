from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON
from app.database import Base

class Quiz(Base):
    __tablename__ = "quizzes"
    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True)
    title = Column(String)
    summary = Column(Text)

class Question(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"))
    question = Column(Text)
    options = Column(JSON)
    answer = Column(String)
    difficulty = Column(String)
    explanation = Column(Text)
