import { useState } from "react";
import { generateQuiz } from "../services/api";

export default function GenerateQuiz() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const handleGenerate = async () => {
    const res = await generateQuiz(url);
    setData(res);
  };

  return (
    <div>
      <h2>Generate Quiz</h2>

      <input
        style={{ width: "60%" }}
        placeholder="Enter Wikipedia URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleGenerate} style={{ marginLeft: 10 }}>
        Generate
      </button>

      {data && data.quiz && data.quiz.map((q, i) => (
        <div key={i} style={{ border: "1px solid #ccc", marginTop: 10, padding: 10 }}>
          <h4>{q.question}</h4>
          <ul>
            {q.options.map((opt) => (
              <li key={opt}>{opt}</li>
            ))}
          </ul>
          <b>Answer:</b> {q.answer}
        </div>
      ))}
    </div>
  );
}
