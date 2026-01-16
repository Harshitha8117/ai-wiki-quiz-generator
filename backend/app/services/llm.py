import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

PROMPT = """
You are an expert quiz generator.

Using ONLY the content below, generate 5 to 7 multiple-choice questions.

For each question provide:
- question
- 4 options
- correct answer
- difficulty (easy / medium / hard)
- 1 short explanation grounded in the content

Return ONLY valid JSON in this format:

[
  {
    "question": "",
    "options": ["", "", "", ""],
    "answer": "",
    "difficulty": "",
    "explanation": ""
  }
]

Content:
{content}
"""

def generate_quiz(title: str, summary: str):
    prompt = PROMPT.format(content=summary[:4000])

    response = client.models.generate_content(
        model="gemini-pro",
        contents=prompt
    )

    text = response.text.strip()

    # Remove markdown if Gemini adds it
    if "```" in text:
        text = text.split("```")[1]

    try:
        return json.loads(text)
    except Exception:
        # SAFE FALLBACK (never crash API)
        return [
            {
                "question": "Quiz generation succeeded but output was not valid JSON.",
                "options": ["Retry", "Retry", "Retry", "Retry"],
                "answer": "Retry",
                "difficulty": "easy",
                "explanation": "This fallback prevents API failure."
            }
        ]
