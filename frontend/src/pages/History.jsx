import { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory().then(setHistory);
  }, []);

  return (
    <div
      style={{
        marginTop: "2rem",
        background: "#141414",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Past Quizzes</h2>

      {history.length === 0 ? (
        <p style={{ opacity: 0.6 }}>No quizzes generated yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", color: "#aaa" }}>
              <th style={{ padding: "0.75rem" }}>ID</th>
              <th style={{ padding: "0.75rem" }}>Title</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderTop: "1px solid #222",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#1c1c1c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={{ padding: "0.75rem", color: "#ccc" }}>
                  {item.id}
                </td>
                <td style={{ padding: "0.75rem", fontWeight: 500 }}>
                  {item.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
