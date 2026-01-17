import { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";
import "./History.css";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory().then(setHistory);
  }, []);

  return (
    <div className="history-section">
      <h2>Past Quizzes</h2>

      {history.length === 0 ? (
        <p className="empty-text">No quizzes generated yet.</p>
      ) : (
        <div className="history-grid">
          {history.map((quiz) => (
            <div key={quiz.id} className="history-card">
              <span className="quiz-id">#{quiz.id}</span>
              <h3 className="quiz-title">{quiz.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
