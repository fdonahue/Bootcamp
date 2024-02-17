# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route("/add")
def adding():
    """adds a and b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a,b)
    return str(result)

@app.route("/sub")
def subbing():
    """subtracts a and b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a,b)
    return str(result)

@app.route("/mult")
def multing():
    """multiplies a and b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a,b)
    return str(result)

@app.route("/div")
def divving():
    """divides a and b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a,b)
    return str(result)


#further study
#create dictionary assigning operators
operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}


@app.route("/math/<op>")
def mathing(op):
    """does math depending on operator"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))

    result = operators[op](a,b)

    return str(result)