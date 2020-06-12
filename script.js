// Declaring variables
var score = 0;
var questionIndex = 0;
var secondsLeft = 60;
var penalty = 10;
var hold = 0;
var startQuiz = document.querySelector("#start");
var currentTime = document.querySelector("#time");
var quiz = document.querySelector("#quiz-section");
var ulChoice = document.querySelector("#choices");
// Variable for array with questions
var questions = [
    {
        question: "Which coding language allows you to create dynamic applications?",
        choices: [
            "html", "javascript", "python", "css"
        ],
        answer: "javascript"
    },
    {
        question: "What is a quick expression that writes a message on the debbuging console?",
        choices: [
            "alert", "prompt", "console.log", "function"
        ],
        answer: "console.log"
    },
    {
        question: "Arrays, which are a collection of like or similar elements, start with an index of what?",
        choices: [
            "0", "x", "1", "i"
        ],
        answer: "0"
    },
    {
        question: "What value stands for true or false when it comes to coding?",
        choices: [
            "string", "boolean", "variables", "confirm"
        ],
        answer: "boolean"
    }, {
        question: "What does three equal signs mean in javascript?",
        choices: [
            "compares value", "compares type", "all of the above", "none of the above"
        ],
        answer: "all of the above"
    }
];

currentTime.append("Time: " + secondsLeft)

// Start Quiz sets timer
startQuiz.addEventListener("click", function () {
    if (hold === 0) {
        hold = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(hold);
                finish();
                currentTime.textContent = "Time's Up";
            }
        }, 1000);
    } // Renders questions
    render(questionIndex);
});
// Render questions and choices
function render(questionIndex) { // Clearing HTML markup
    quiz.innerHTML = "";
    ulChoice.innerHTML = "";
    // For loop to iterate the array
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[i].question;
        var userChoices = questions[i].choices;
        quiz.textContent = userQuestion;
        ulChoice.textContent = userChoices;

    }
    // New item for each choice to compare
    userChoices.forEach(function (item) {
        var list = document.createElement("li");
        item = list.textContent;
        quiz.appendChild(ulChoice);
        ulChoice.appendChild(list);
        list.addEventListener("click", (compare));
    })
}

// Check choices with answer
function compare(event) {
    var match = event.target;
    if (match.matches("li")) {
        var announcement = document.createElement("div");
        announcement.setAttribute("id", "announcement");
        if (match.textContent == questions[questionIndex].answer) {
            score++;
            announcement.textContent = "Correct"
        } else {
            secondsLeft = secondsLeft - penalty;
            announcement.textContent = "Incorrect"
        }
    }

    // Determines the question number
    questionIndex++;
    if (questionIndex >= question.length) {
        finish();
    } else {
        render(questionIndex);
    } 
}
//Calculate time and score
if (secondsLeft >= 0) {
    var timeLeft = secondsLeft;
    var p = document.createElement("p");
    clearInterval(hold);
    paragraph.textContent = "Score: " + timeLeft;
    quiz.appendChild(p);
}

// Quiz over page
function finish() {
    quiz.innerHTML = "";
    currentTime.innerHTML = "";
    var text = document.createElement("h1");
    text.setAttribute("id", "finish");
    text.textContent = "Quiz Finished";
    var highscore = document.createElement("h4");
    highscore.setAttribute("id", "highscore")
    highscore.textContent= "You scored " + score + "/6 questions correct.";
    quiz.appendChild(text);
    quiz.appendChild(highscore);
//Inital form submit
    var initials = document.createElement("form");
    initials.setAttribute("id", "initials");
    initials.textContent = "Initials: ";
    quiz.appendChild(initials);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "text");
    input.textContent = "";
    quiz.appendChild(input);

    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    quiz.appendChild(submit);

    submit.addEventListener("click", function(){
        var text= input.value;
        if(text === null) {
            alert("You must input valid initials.");
        }
        else{
            var finalScore = {
                text: text,
                score: timeLeft
            }
            alert ("Thank you for your submission");
        }
    });
}

