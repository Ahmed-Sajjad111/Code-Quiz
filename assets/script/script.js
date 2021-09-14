var bodyEl = document.querySelector(".body");
var highScoreEl = document.querySelector(".high-score");
var timerDurationEl = document.querySelector(".timer-duration");
var pageContentEl = document.querySelector(".page-content");
var mainContentEl = document.querySelector(".main-content");
var titleEl = document.querySelector(".title");
var secondaryContentEl = document.querySelector(".secondary-content");
var contentEl = document.querySelector(".content");
var tertiaryContentEl = document.querySelector(".tertiary-content");
var startBtnEl = document.querySelector(".start");
var timeRemaining = 90
var timeInterval;
var questions = [
    {
        number: 1,
        question: "What HTML element does JavaScript go inside of?",
        answer1:"A) <javascript>",
        answer2:"B) <script>",
        answer3:"C) <js>",
        answer4:"D) <scripting>",
    },
    {
        number: 2,
        question: "Where is the correct place to insert JavaScript?",
        answer1:"A) At the top of HTML, right before CSS",
        answer2:"B) <head>",
        answer3:"C) <body>",
        answer4:"D) Anywhere",
    },
    {
        number: 3,
        question: "What is the correct syntax for refrerring to an external script with the file name 'script.js'",
        answer1:"A) You cannot reference external JavaScript",
        answer2:"B) <script href='script.js'>",
        answer3:"C) <script name='script.js'>",
        answer4:"D) <script src='script.js'>",
    },
    {
        number: 4,
        question: "How do you write a proper IF statement in JavaScript?",
        answer1:"A) if i = 5 then",
        answer2:"B) if i = 5",
        answer3:"C) if (i == 5)",
        answer4:"D) if i == 5 then",
    },
    {
        number: 5,
        question: "How do you add a comment in JavaScript?",
        answer1:"A) //This is a comment",
        answer2:"B) /* This is a comment */",
        answer3:"C) <!-- This is a comment -->",
        answer4:"D) Both A and B",
    },
]

// function to remove instruction page and display questions
function removeStarterElements() {
    //remove current contents of page
    titleEl.remove();
    contentEl.remove();
    startBtnEl.remove();

    //set up container to display questions
    secondaryContentEl.setAttribute('id', 'question-format')
}

function question1() {
    //question 1
    var question1El = document.createElement("h1");
    question1El.textContent = questions[0].question;
    question1El.setAttribute('id', 'questions');
    mainContentEl.appendChild(question1El);
    
    //answers to question 1
    var question1A = document.createElement("button");
    question1A.textContent = questions[0].answer1;
    question1A.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question1A);
    
    var question1B = document.createElement("button");
    question1B.textContent = questions[0].answer2;
    question1B.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question1B);
    
    var question1C = document.createElement("button");
    question1C.textContent = questions[0].answer3;
    question1C.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question1C);
    
    var question1D = document.createElement("button");
    question1D.textContent = questions[0].answer4;
    question1D.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question1D);
}

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

    removeStarterElements();
    question1();
}
startBtnEl.addEventListener("click",quizStart);