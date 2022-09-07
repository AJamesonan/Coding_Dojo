from flask import render_template,redirect,request,session,flash
from flask_app import app

# from flask_app.models.model import Class

@app.route('/')
def start():
    return render_template('index.html')