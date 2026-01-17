# 🧠 AI Wiki Quiz Generator

An end-to-end web application that generates multiple-choice quizzes from Wikipedia articles using AI.
Built with **FastAPI**, **React (Vite)**, and deployed using **Render** and **Netlify**.

---

## 🚀 Live Demo

* **Frontend (Netlify)**
  👉 [https://ai-wiki-quiz-harshitha.netlify.app](https://ai-wiki-quiz-harshitha.netlify.app)

* **Backend API (Render)**
  👉 [https://ai-wiki-quiz-backend-f99n.onrender.com](https://ai-wiki-quiz-backend-f99n.onrender.com)
  👉 Swagger Docs: [https://ai-wiki-quiz-backend-f99n.onrender.com/docs](https://ai-wiki-quiz-backend-f99n.onrender.com/docs)

---

## 📌 Features

* 🔗 Accepts a Wikipedia article URL as input
* 🤖 Uses AI to generate quiz questions from article content
* 🧩 Displays multiple-choice questions with answers
* 🕒 Stores previously generated quizzes
* 📜 Shows quiz history in a clean UI
* 🌐 Fully deployed (Frontend + Backend)
* 📱 Responsive dark-themed interface

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS (custom dark theme)
* Deployed on **Netlify**

### Backend

* FastAPI
* SQLAlchemy + SQLite
* CORS-enabled REST API
* Deployed on **Render**

---

## 🧪 Sample Input URLs

Use any valid Wikipedia article, for example:

```
https://en.wikipedia.org/wiki/Computer_science
https://en.wikipedia.org/wiki/Artificial_intelligence
https://en.wikipedia.org/wiki/Alan_Turing
https://en.wikipedia.org/wiki/Machine_learning
```

---

## 📸 Screenshots (Assignment Requirement)

The repository includes **all required screenshots**:

1. **Generate Quiz View**

   * Wikipedia URL input
   * Generated quiz questions visible

2. **History View**

   * Table / cards showing past quizzes

3. **Swagger API Response**

   * `/quiz` endpoint JSON response

📂 Screenshots are included in the repository root and also uploaded to Google Drive.

---

## ⚙️ Local Setup (Optional)

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
ai-wiki-quiz-generator/
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── models.py
│   │   ├── database.py
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
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

## 🔐 CORS & Deployment Notes

* Backend allows cross-origin requests for frontend communication
* Environment-safe configuration used for deployment
* SQLite used for simplicity (assignment scope)

---

## ✅ Assignment Status

* [x] Core functionality implemented
* [x] UI completed
* [x] Backend API functional
* [x] History persistence
* [x] Screenshots captured
* [x] GitHub repository updated
* [x] Deployed frontend & backend

---

## 👩‍💻 Author

**Harshitha**
GitHub: [https://github.com/Harshitha8117](https://github.com/Harshitha8117)

---

## 🏁 Final Notes

This project was built as part of an assignment to demonstrate:

* Full-stack development skills
* API design
* Frontend-backend integration
* Deployment readiness
* Clean, readable code structure

✨ Thank you for reviewing!

