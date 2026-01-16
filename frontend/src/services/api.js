const BASE_URL = "http://localhost:8000";

export async function generateQuiz(url) {
  const res = await fetch(`${BASE_URL}/quiz/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  return res.json();
}

export async function fetchHistory() {
  const res = await fetch(`${BASE_URL}/history/`);
  return res.json();
}
