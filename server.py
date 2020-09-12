from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import datetime


app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///store.db'
db=SQLAlchemy(app)

class Product(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    titre=db.Column(db.String(20),nullable=False)
    description=db.Column(db.Text,nullable=False)
    prix=db.Column(db.Float,nullable=False)
    image=db.Column(db.String(20),nullable=False)
    Specs=db.Column(db.String(60), nullable=False)


class Message(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    nom=db.Column(db.String(20),nullable=False)
    email=db.Column(db.String(20),nullable=False)
    mdate=db.Column(db.DateTime,default=datetime.datetime.utcnow)
    message=db.Column(db.Text,nullable=False)
    rate=db.Column(db.Integer, nullable=False)
    

messages=[]



@app.route("/")
def home():
    products=Product.query.all()
    x=datetime.datetime.now().date()
    return render_template("home.html",today=x, prods=products, titre="Home")

@app.route("/about")
def about():
    return  render_template("about.html",titre="About")


@app.route("/contact",methods=['GET','POST'])
def contact():
    valid=True
    ALL=[]
    if request.method=="POST":
        nom=request.form.get("nom")
        email=request.form.get("email")
        message=request.form.get("message")
        mdate=request.form.get("mdate")
        rate=request.form.get("rate")
        msg=Message(nom=nom, email=email,message=message,mdate=mdate, rate=rate)
        db.session.add(msg)
        db.session.commit()
    messages=Message.query.all()
 
    for MESSAGE in messages:
        ALL.insert(0,MESSAGE)
    
    return  render_template("contact.html",valid=valid,messages=ALL)


@app.route("/product/<id>")
def prduit(id):
    products = Product.query.all()
    id = products[int(id)]
    titre = id.titre
    description = id.description
    prix = id.prix
    image = id.image
    Specs = id.Specs
    return render_template("product.html", id = id, titre = titre, prix = prix, Specs = Specs, image = image, description = description)


if __name__=="__main__":
    app.run(debug=True)