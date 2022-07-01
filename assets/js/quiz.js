var quizData = new Map([
    [
        "Who created JavaScript?",
        ["Joe", "Henry", "Lindsay", "William"]
    ],
    [
        "What is the result of string(\"Quotes\")===\"Quotes\"?",
        ["False", "False", "False", "SyntaxError"]
    ],
    [
        "What is the correct JavaScript syntax to print \“Go Huskies\” in the console?",
        ["console.log(\"Go Monkeys\”)", "console.hog(\"Go Huskies\")", "console.log(\"Lincoln\")", "consoul.log(\"Go Huskies\")"]
    ],
    [
        "Which of the following will yield a pop-up message requiring user input?",
        ["alert()", "pop()", "message()", "prom?()"]
    ],
    [
        "How do you round numbers to the nearest integer?",
        ["round()", "Math.square()", "Using fingers", "Consult an Asian"]
    ]
]);

var timer = document.getElementById("timer");
var question = "";
var questionNumber = 1;
var answers = [];
var secondsLeft;
var timerInterval;
var highScores = [];
var totalQuestions = quizData.size;
let score = 0;

for (let i = 0; i < 4; i++) {
    document
      .getElementById("button" + (i + 1))
      .addEventListener("click", function () {
        check(this);
      });
}

function setTimer (time) {
    secondsLeft = time;
    timer.textContent = secondsLeft;
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft = 0) {
            load();
        }
    }, 1000);
}

function check (selection) {
    // impossible to answer correctly, but this unnecessary code can be reused to not-impossible quizzes
    if (selection.textContent === answers[4]) {
        console.log(selection);
        score++;
        load();
        ;
    }   else {
        setTimeout(function() { alert("WRONG!"); }, 2)
        load();
    }
}

function load() {
    if (questionNumber > totalQuestions) {
        end();
    }   else {
        question = Array.from(quizData.keys())[questionNumber - 1];
        document.getElementById("question").textContent = question;  
        answers = quizData.get(question);
        for (let i = 0; i < 4; i++) {
            document.getElementById("button" + (i + 1)).textContent = answers[i];
        }
        questionNumber++;
    }
}

function end() {
    document.getElementById("buttons").remove();
    clearInterval(timerInterval);
    document.getElementById("question").textContent =
    "Your score:" + score;
// Figuring out how to save score


}


load();