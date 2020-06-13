// Declaring variables
var score = 0;
var questionIndex = 0;
var secondsLeft = 60;
var penalty = 10;
var interval = 0;
var startQuiz = document.querySelector("#start");
startQuiz.addEventListener("click", startQuiz);
var currentTime = document.querySelector("#time");
var question = document.querySelector("#quiz-section");
var choice1El = document.querySelector("#choiceA");
var choice2El = document.querySelector("#choiceB");
var choice3El = document.querySelector("#choiceC")
var choice4El = document.querySelector("#choiceD");
// Variable for array with questions
var q1 = 
    {
        question: "Which coding language allows you to create dynamic applications?",
        choice1: "html",
        choice2: "javascript",
        choice3: "python",
        choice4:"css",
        answer: "javascript"   
       
    },
    var q2 = {
        question: "What is a quick expression that writes a message on the debbuging console?",
        choice1: "alert",
        choice2: "prompt",
        choice3: "console.log",
        choice4:"function",
        answer: "console.log"   
       
    },
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
    var questionIndex = [q1, q2, q3, q4, q5];
    var index = 0



    
    // Start Quiz sets time
    function startQuiz() {
        startButton.style.display = "none"
        count();
        render();
    
currentTime.append("Time: " + secondsLeft)

// Start Quiz sets timer
function count (){
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(interval);
                finish();
                currentTime.textContent = "Time's Up";
            }
        }, 1000);
    } // Renders questions
    render();
}

function render() { 
   question.style.display= "block";
   choice1El.style.display = "table-row";
    choice2El.style.display = "table-row";
    choice3El.style.display = "table-row";
    choice4El.style.display = "table-row";
    if(index < questionIndex.length){
        question.textContent = questionArr[index].question;
        choice1El.textContent = questionArr[index].choice1;
        choice2El.textContent = questionArr[index].choice2;
        choice3El.textContent = questionArr[index].choice3;
        choice4El.textContent = questionArr[index].choice4;
        answer = questionArr[index].answer
        if (secondsLeft > 10){
            choice1El.onclick= function(){
                if(questionIndex[index].choice1 == answer){
                    scoreTracker++
                    nextQuestion()
                } else {
                    secondsLeft= secondsLeft -10
                    nextQuestion
                }
            }
            choice2El.onclick = function(){
                if(questionArr[index].choice2 == answer){
                    scoreTracker++
                    nextQuestion()
                } else {
                    secondsLeft = secondsLeft - 10
                    nextQuestion()
                }

    }
    choice3El.onclick = function(){
        if(questionArr[index].choice3 == answer){
            scoreTracker++
            nextQuestion()
        } else {
            secondsLeft = secondsLeft - 10
            nextQuestion()
        }
    }
    choice4El.onclick = function(){
        if(questionArr[index].choice4 == answer){
            scoreTracker++
            nextQuestion()
        } else {
            secondsLeft = secondsLeft - 10
            nextQuestion()
        }

    }


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
            announcement.textContent = "Correct";
        } else {
            secondsLeft = secondsLeft - penalty;
            announcement.textContent = "Incorrect";
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
            alert ("Thank you for your submission.");
        }
    });
}

