from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import quiz, history
from app.database import engine
from app import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Wiki Quiz Generator")

# 🔑 CORS CONFIGURATION (THIS FIXES OPTIONS 405)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quiz.router)
app.include_router(history.router)
