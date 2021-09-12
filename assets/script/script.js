var bodyEl = document.querySelector(".body");
var highScoreEl = document.querySelector(".high-score");
var timerDurationEl = document.querySelector(".timer-duration");
var pageContentEl = document.querySelector("page-content");
var mainContentEl = document.querySelector("main-content");
var secondaryContentEl = document.querySelector("secondary-content");
var tertiaryContentEl = document.querySelector("tertiary-content");
var startBtnEl = document.querySelector(".start");
var timeRemaining = 90
var timeInterval;
var questions = [
    {
        number: 1,
        question: "What HTML element does JavaScript go inside of?",
        answer1:"<javascript>",
        answer2:"<script>",
        answer3:"<js>",
        answer4:"<scripting>",
    },
    {
        number: 2,
        question: "Where is the correct place to insert JavaScript?",
        answer1:"At the top of HTML, right before CSS",
        answer2:"<head>",
        answer3:"<body>",
        answer4:"Anywhere",
    },
    {
        number: 3,
        question: "What is the correct syntax for refrerring to an external script with the file name 'script.js'",
        answer1:"You cannot reference external JavaScript",
        answer2:"<script href='script.js'>",
        answer3:"<script name='script.js'>",
        answer4:"<script src='script.js'>",
    },
    {
        number: 4,
        question: "How do you write a proper IF statement in JavaScript?",
        answer1:"if i = 5 then",
        answer2:"if i = 5",
        answer3:"if (i == 5)",
        answer4:"if i == 5 then",
    },
    {
        number: 5,
        question: "How do you add a comment in JavaScript?",
        answer1:"//This is a comment",
        answer2:"/* This is a comment */",
        answer3:"<!-- This is a comment -->",
        answer4:"Both A and B",
    },
]
function quizStart() {
    setInterval(function() {
    if (timeRemaining > 1) {
        timerDurationEl.textContent = timeRemaining;
        timeRemaining--;
    } else if (timeRemaining === 1) {
        timerDurationEl.textContent = timeRemaining;
        timeRemaining--;
    } else {
        timerDurationEl.textContent = '';
        clearInterval(timeInterval)
    }
    }, 1000);
}
startBtnEl.addEventListener("click",quizStart);