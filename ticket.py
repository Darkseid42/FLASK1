from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///jobs.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)

class JOBS(db.Model):
    SLNo = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String(200), nullable=False)
    Description = db.Column(db.String(500), nullable=False)
    Date_created = db.Column(db.DateTime, default=datetime.utcnow)
    

    def __repr__(self) -> str:
        return f" {self.SLNo} - {self.Title} " 

         
@app.route("/")
def hello_world():
    jobs = JOBS(Title="First Jobs", Description="Invest in SM")
    db.session.add(jobs)
    db.session.commit()
    return render_template('index.html')

@app.route("/products")
def products():
    return "<p>This is products</p>"    

if __name__ == "__main__":
    app.run(debug=True)
