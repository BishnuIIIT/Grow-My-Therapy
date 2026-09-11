import json
import re
from bs4 import BeautifulSoup

with open(r'C:\Users\jhara\.gemini\antigravity\brain\7572f6da-f638-4de1-b2f2-1c82dbfc0f1f\.system_generated\steps\2428\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

script = soup.find('script', {'id': '__NEXT_DATA__'})
if script:
    data = json.loads(script.string)
    print("Found NEXT_DATA")
else:
    # Just extract and print visible text
    texts = soup.get_text(separator='\n', strip=True)
    # We want to find the user/assistant messages.
    # We can try to regex for them, or just print everything.
    print(texts[:5000])
