import { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory().then((data) => {
      setHistory(data); // IMPORTANT: store full array
    });
  }, []);

  return (
    <div>
      <h2>Past Quizzes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {history.length === 0 ? (
            <tr>
              <td colSpan="2">No past quizzes</td>
            </tr>
          ) : (
            history.map((quiz) => (
              <tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>{quiz.title}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default History;
