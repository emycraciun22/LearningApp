import os
from flask import Flask, render_template

project_dir = os.path.dirname(__file__)
template_dir = os.path.join(project_dir, "Presentation\\templates")
static_dir = os.path.join(project_dir, "Presentation\\static")

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

app.config["DEBUG"] = True


@app.route('/')
@app.route('/index')
def index():
    return render_template("home/home.html")


@app.route('/register')
def register():
    return render_template("authentication/register.html")


@app.route('/login')
def login():
    return render_template("authentication/login.html")


if __name__ == '__main__':
    app.run()
