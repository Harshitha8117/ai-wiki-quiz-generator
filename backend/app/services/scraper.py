import requests
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

def scrape_wikipedia(url: str):
    response = requests.get(url, headers=HEADERS, timeout=10)

    if response.status_code != 200:
        raise ValueError("Failed to fetch Wikipedia page")

    soup = BeautifulSoup(response.text, "html.parser")

    title_tag = soup.find("h1")
    if not title_tag:
        raise ValueError("Wikipedia page structure not found")

    title = title_tag.text.strip()

    paragraphs = soup.find_all("p")
    summary_parts = [p.text.strip() for p in paragraphs if p.text.strip()][:3]

    if not summary_parts:
        raise ValueError("No summary content found")

    summary = " ".join(summary_parts)

    return title, summary
