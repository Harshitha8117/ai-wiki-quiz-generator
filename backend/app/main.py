from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import quiz, history
from app.database import engine
from app import models

# Create DB tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Wiki Quiz Generator",
    version="1.0.0",
    description="Generate quizzes from Wikipedia articles using AI"
)

# 🔐 CORS CONFIGURATION (SAFE FOR LOCAL + DEPLOYMENT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # Allow all origins (safe for assignment/demo)
    allow_credentials=True,
    allow_methods=["*"],          # Allow POST, GET, OPTIONS, etc.
    allow_headers=["*"],          # Allow all headers
)

# Routers
app.include_router(quiz.router, prefix="/quiz", tags=["Quiz"])
app.include_router(history.router, prefix="/history", tags=["History"])


# Health check endpoint (optional but professional)
@app.get("/")
def health_check():
    return {"status": "AI Wiki Quiz Generator API is running"}
