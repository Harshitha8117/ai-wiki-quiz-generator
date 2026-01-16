import { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";

export default function History() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchHistory().then(setItems);
  }, []);

  return (
    <div>
      <h2>Past Quizzes</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
