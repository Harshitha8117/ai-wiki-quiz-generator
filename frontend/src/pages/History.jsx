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

      <table style={{
    width: "100%",
    borderCollapse: "collapse",
    background: "#161616",
    borderRadius: 12,
    overflow: "hidden",
  }}>
        <thead>
          <tr>
            <th style={{ padding: "0.8rem", borderBottom: "1px solid #333" }}>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {history.length === 0 ? (
            <tr>
              <td style={{ padding: "0.7rem", borderBottom: "1px solid #222" }} colSpan="2">No past quizzes</td>
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
