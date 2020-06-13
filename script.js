// Declaring variables
var score = 0;
var secondsLeft = 60;
var penalty = 10;
var interval = 0;
var prompt = document.querySelector("#prompt")
var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);
var currentTime = document.querySelector("#time");
var question = document.querySelector("#questions");
var choice1El = document.querySelector("#choiceA");
var choice2El = document.querySelector("#choiceB");
var choice3El = document.querySelector("#choiceC")
var choice4El = document.querySelector("#choiceD");

choice1El.style.display = "none";
choice2El.style.display = "none";
choice3El.style.display = "none";
choice4El.style.display = "none";

// final score display
// var finalScore = document.querySelector("#final-score")
// finalScore.style.display = "none";
// var finalScoreBoard = document.querySelector("#final-score-form")
// finalScoreBoard.style.display = "none"

// Questions
var q1 = {
    question: "Which coding language allows you to create dynamic applications?",
    choice1: "html",
    choice2: "javascript",
    choice3: "python",
    choice4: "css",
    answer: "javascript"

}
var q2 = {
    question: "What is a quick expression that writes a message on the debbuging console?",
    choice1: "alert",
    choice2: "prompt",
    choice3: "console.log",
    choice4: "function",
    answer: "console.log"

}
var q3 = {
    question: "Arrays, which are a collection of like or similar elements, start with an index of what?",
    choice1: "0",
    choice2: "x",
    choice3: "1",
    choice4: "i",
    answer: "0"
}

var q4 = {
    question: "what value stands for true or false when it comes to coding?",
    choice1: "string",
    choice2: "boolean",
    choice3: "variables",
    choice4: "confirm",
    answer: "boolean"

}

var q5 = {
    question: "what does three equal signs mean in javascript?",
    choice1: "compares value",
    choice2: "compares type",
    choice3: "all of the above",
    choice4: "none of the above",
    answer: "all of the above"


}
var questionIndex = [
    q1,
    q2,
    q3,
    q4,
    q5
];
var index = 0


// Start Quiz sets time
function startQuiz() {
    startButton.style.display = "none"
    prompt.style.display = "none"
    count();
    render();
}

// Start Quiz sets timer
function count() {
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            if (secondsLeft <= 0) {
                finish();
                clearInterval(interval);
                currentTime.textContent = "Time's Up";
            }
        }, 1000);
    }
}

function render() { // allows you to show question and choices
    question.style.display = "block";
    choice1El.style.display = "table-row";
    choice2El.style.display = "table-row";
    choice3El.style.display = "table-row";
    choice4El.style.display = "table-row";
    // check if index is < questionIndex
    if (index < questionIndex.length) {
        question.textContent = questionIndex[index].question;
        choice1El.textContent = questionIndex[index].choice1;
        choice2El.textContent = questionIndex[index].choice2;
        choice3El.textContent = questionIndex[index].choice3;
        choice4El.textContent = questionIndex[index].choice4;
        answer = questionIndex[index].answer
        if (secondsLeft > 10) {
            choice1El.onclick = function () {
                if (questionIndex[index].choice1 == answer) {
                    console.log("string")
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }
            choice2El.onclick = function () {
                if (questionIndex[index].choice2 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }

            }
            choice3El.onclick = function () {
                if (questionIndex[index].choice3 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }
            choice4El.onclick = function () {
                if (questionIndex[index].choice4 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }
        }
    } else {
        console.log('you made it through the quiz!')
        currentTime = 0
        finish();
    }
}

// Quiz over page
function finish() {
    question.innerHTML = "";
        choice1El.style.display = "none";
        choice2El.style.display = "none";
        choice3El.style.display = "none";
        choice4El.style.display = "none";
       
        var text = document.createElement("h1");
        text.setAttribute("id", "finish");
        text.textContent = "Quiz Finished";
        
        var highscore = document.createElement("h4");
        highscore.setAttribute("id", "highscore")
        highscore.textContent = "You scored " + score + "/5 questions correct.";
        question.appendChild(text);
        question.appendChild(highscore);
        // Inital form submit
        var initials = document.createElement("form");
        initials.setAttribute("id", "initials");
        initials.textContent = "Initials: ";
        question.appendChild(initials);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "text");
        input.textContent = "";
        question.appendChild(input);

        var submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.setAttribute("id", "submit");
        submit.textContent = "Submit";
        question.appendChild(submit);
    // Event listener to store initals and scores in local storage
        submit.addEventListener("click", function (event) {
            var text = input.value;
            event.preventDefault();
            if (text === null) {
                alert("You must input valid initials.");
            } else {
                var final = {
                    initial: text,
                    finalscore: score
                }
            }
            var scoreStor = localStorage.getItem("scorStor");
            if (scoreStor === null) {
                scoreStor = [];
            } else {
                scoreStor = JSON.parse(scoreStor);
            } scoreStor.push(final);
            var newScore = JSON.stringify(scoreStor);
            localStorage.setItem("scoreStor", newScore);
            //goes to high score page
            window.location.replace("./scores.html");
        }
    


        )}
