# Shanif P - Portfolio

A static portfolio site (HTML, CSS, JavaScript) with a tiny Flask server.

## Run it (Termux or Linux)

    pkg install python        # Termux only
    pip install -r requirements.txt
    python app.py

Open http://127.0.0.1:5000 in your browser.

You can also open `index.html` directly, or upload the whole folder to GitHub Pages, Netlify or Vercel. No build step is needed.

## Get found on Google

1. Deploy the folder (GitHub Pages, Netlify or Vercel) and note your site address.
2. Run `python set_domain.py https://your-address` once. It fills in the canonical link, share image and sitemap.
3. Redeploy, then add the site in Google Search Console and submit `https://your-address/sitemap.xml`.
4. Link the site from your GitHub profile and CV so search engines find it faster.

Indexing takes days to weeks, and ranking is never guaranteed.

## Files

- `index.html` - page structure and content
- `static/css/style.css` - colors, layout, animations (palette variables at the top)
- `static/js/main.js` - loader, typing effect, scroll animations
- `static/images/shanif-hero.webp` - hero photo
- `static/images/certificate-python-essentials-2.webp` - your Cisco certificate (opens larger when clicked)
- `static/images/og-image.jpg` - preview image for WhatsApp, LinkedIn and X shares
- `robots.txt`, `sitemap.xml`, `_headers`, `set_domain.py` - SEO and caching helpers
- `static/video/shanif-intro.mp4` - your talking intro (plays on the "Hear my intro" button; the blue background is keyed out so the hero shows through)
- `static/resume/Shanif-P-CV.pdf` - CV ("Download CV" button)

Fonts (Anton, Manrope) load from Google Fonts, so the first visit needs internet.
