"""Usage: python set_domain.py https://your-domain.com

Replaces the https://YOUR-DOMAIN placeholder in index.html, robots.txt and sitemap.xml.
"""
import sys

if len(sys.argv) != 2 or not sys.argv[1].startswith("http"):
    sys.exit("Usage: python set_domain.py https://your-domain.com")

domain = sys.argv[1].rstrip("/")
for name in ("index.html", "robots.txt", "sitemap.xml"):
    with open(name, encoding="utf-8") as f:
        text = f.read()
    with open(name, "w", encoding="utf-8") as f:
        f.write(text.replace("https://YOUR-DOMAIN", domain))
    print("updated", name)
