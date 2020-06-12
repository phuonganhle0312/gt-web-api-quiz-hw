//Declared variables
var score=0;
var questionIndex;
var secondsLeft=60;
var penalty=10;
var hold=0;
var startQuiz= document.querySelector("#start");
var currentTime = document.querySelector("#time");
var quiz = document.querySelector("#quiz-section");

// Variable for questions with array
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
]

//Start Quiz sets timer
startQuiz.addEventListener("click", function(){
    if(hold===0){
        hold = setInterval(function(){
            secondsLeft--;
            currentTime.textContent= "Time:" + secondsLeft;

        if (secondsLeft = 0 ) {
            clearInterval(hold);
            currentTime.textContent= "Time's Up";
        }
        }, 1000);
    } push(questionIndex)
});
//For loop to iterate the array
    function push(questionIndex){
        for(var i = 0; i < questions.length; i++) {
            var userQuestion = questions[questionIndex].question;
            var userChoices = questions[questionIndex].choices;
            quiz.textContent = userQuestion;
            
        }

    }
