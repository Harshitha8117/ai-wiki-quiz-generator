from pydantic import BaseModel
from typing import List

class QuizRequest(BaseModel):
    url: str

class QuestionResponse(BaseModel):
    question: str
    options: List[str]
    answer: str
    difficulty: str
    explanation: str
