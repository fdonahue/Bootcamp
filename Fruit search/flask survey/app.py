from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

#declare empty list called responses
responses = []

#setup debugger
app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

#setup root route
@app.route("/")
def show_survey_beginning():
    """ made route homepage show survey selection"""
    return render_template("survey_beginning.html", survey=survey)


@app.route("/start", methods=["POST"])
def show_questions():
#redirect /start to /questions/0


    return redirect("/questions/0")

@app.route("/answers", methods =["POST"])
def handle_answer():
    choice = request.form['answers']

    responses.append(choice)

    if (len(responses) == len(survey.questions)):
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")

@app.route("/questions/<int:q>")
def show_questions_0(q):


    question = survey.questions[q]
    return render_template("questions.html", question_num=q, question=question)

@app.route("/complete")
def complete():
    """survey completed, opens /complete"""
    return render_template("complete.html")