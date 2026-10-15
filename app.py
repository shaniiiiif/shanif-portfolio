from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static", static_url_path="/static")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 604800  # cache static files for a week


@app.route("/")
def index():
    return send_from_directory(app.root_path, "index.html")


@app.route("/robots.txt")
def robots():
    return send_from_directory(app.root_path, "robots.txt", mimetype="text/plain")


@app.route("/sitemap.xml")
def sitemap():
    return send_from_directory(app.root_path, "sitemap.xml", mimetype="application/xml")


@app.after_request
def headers(resp):
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
