# AI Wiki Quiz Generator

## 📌 Overview

AI Wiki Quiz Generator is a full-stack web application that generates quizzes from Wikipedia articles.
Users can input a Wikipedia URL, automatically generate quiz questions, and view a history of previously generated quizzes.

The application demonstrates end-to-end integration of a **FastAPI backend**, **React frontend**, **database persistence**, and **API documentation**.

---

## 🚀 Features

* Generate quiz questions from any Wikipedia article
* Multiple-choice questions with correct answers
* Persistent storage of generated quizzes
* History view of past quizzes
* Caching to avoid duplicate processing of the same URL
* RESTful API with Swagger documentation
* Clean and minimal frontend UI

---

## 🛠️ Tech Stack

### Backend

* **Python**
* **FastAPI**
* **SQLAlchemy**
* **SQLite**
* **BeautifulSoup** (Wikipedia scraping)

### Frontend

* **React**
* **Vite**

### Tools & Others

* Swagger UI (API documentation)
* Git & GitHub

---

## 📂 Project Structure

```
ai-wiki-quiz-generator/
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── models.py
│   │   ├── database.py
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── screenshots/
│   ├── 1_generate_quiz.png
│   ├── 2_history.png
│   └── 3_api_response.png
│
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Backend will be available at:

```
http://localhost:8000
```

Swagger API Docs:

```
http://localhost:8000/docs
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Generate Quiz

```
POST /quiz
```

**Request Body**

```json
{
  "url": "https://en.wikipedia.org/wiki/Alan_Turing"
}
```

### Get Quiz History

```
GET /history
```

---

## 🖼️ Screenshots

### Generate Quiz

![Generate Quiz](screenshots/1_generate_quiz.png)

### Quiz History

![History](screenshots/2_history.png)

### API Response (Swagger)

![API Response](screenshots/3_api_response.png)

---

## 🧠 Design Decisions

* **Caching** is implemented to prevent duplicate quiz generation for the same Wikipedia URL.
* **Graceful error handling** ensures the application does not crash on API or scraping failures.
* **CORS configuration** enables smooth frontend–backend communication.
* The UI is kept minimal to focus on functionality and clarity.

---

## 📌 Notes

* The application is run locally; screenshots are provided as proof of functionality.
* The database uses SQLite for simplicity and easy setup.
* The project is structured to allow easy extension (e.g., more questions, difficulty levels, user authentication).

---

## ✅ Assignment Completion

This project fulfills all the requirements mentioned in the assignment:

* Quiz generation from Wikipedia
* API integration
* Frontend UI
* Persistent history
* Documentation and screenshots

---

### 👤 Author

**Harshitha**

---
