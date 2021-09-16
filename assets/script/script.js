var bodyEl = document.querySelector(".body");
var highScoreEl = document.querySelector(".high-score");
var timerDurationEl = document.querySelector(".timer-duration");
var headerEl = document.querySelector(".first-container");
var footerEl = document.querySelector(".bottom-container");
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
        text: "What HTML element does JavaScript go inside of?",
        answer1:"A) <javascript>",
        answer2:"B) <script>",
        answer3:"C) <js>",
        answer4:"D) <scripting>",
        correctanswer: "B"
    },
    {
        number: 2,
        text: "Where is the correct place to insert JavaScript?",
        answer1:"A) At the top of HTML, right before CSS",
        answer2:"B) <head>",
        answer3:"C) <body>",
        answer4:"D) Anywhere",
        correctanswer: "C"
    },
    {
        number: 3,
        text: "What is the correct syntax for refrerring to an external script with the file name 'script.js'",
        answer1:"A) You cannot reference external JavaScript",
        answer2:"B) <script href='script.js'>",
        answer3:"C) <script name='script.js'>",
        answer4:"D) <script src='script.js'>",
        correctanswer: "D"
    },
    {
        number: 4,
        text: "How do you write a proper IF statement in JavaScript?",
        answer1:"A) if i = 5 then",
        answer2:"B) if i = 5",
        answer3:"C) if (i == 5)",
        answer4:"D) if i == 5 then",
        correctanswer: "C"
    },
    {
        number: 5,
        text: "How do you add a comment in JavaScript?",
        answer1:"A) //This is a comment",
        answer2:"B) /* This is a comment */",
        answer3:"C) <!-- This is a comment -->",
        answer4:"D) Both A and B",
        correctanswer: "D"
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
    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[0].text;
    questionEl.setAttribute('id', 'questions');
    mainContentEl.appendChild(questionEl);
    
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

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("answer-button")
        [i].addEventListener("click" , () => {
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            questionEl.remove();
            question2();
        });
    }
}

function question2() {
    //question 2
    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[1].text;
    questionEl.setAttribute('id', 'questions');
    mainContentEl.appendChild(questionEl);
    
    //answers to question 2
    var question2A = document.createElement("button");
    question2A.textContent = questions[1].answer1;
    question2A.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question2A);
    
    var question2B = document.createElement("button");
    question2B.textContent = questions[1].answer2;
    question2B.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question2B);
    
    var question2C = document.createElement("button");
    question2C.textContent = questions[1].answer3;
    question2C.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question2C);
    
    var question2D = document.createElement("button");
    question2D.textContent = questions[1].answer4;
    question2D.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question2D);

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("answer-button")
        [i].addEventListener("click" , () => {
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            questionEl.remove();
            question3();
        });
    }
}

function question3() {
    //question 3
    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[2].text;
    questionEl.setAttribute('id', 'questions');
    mainContentEl.appendChild(questionEl);
    
    //answers to question 3
    var question3A = document.createElement("button");
    question3A.textContent = questions[2].answer1;
    question3A.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question3A);
    
    var question3B = document.createElement("button");
    question3B.textContent = questions[2].answer2;
    question3B.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question3B);
    
    var question3C = document.createElement("button");
    question3C.textContent = questions[2].answer3;
    question3C.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question3C);
    
    var question3D = document.createElement("button");
    question3D.textContent = questions[2].answer4;
    question3D.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question3D);

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("answer-button")
        [i].addEventListener("click" , () => {
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            questionEl.remove();
            question4();
        });
    }
}

function question4() {
    //question 4
    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[3].text;
    questionEl.setAttribute('id', 'questions');
    mainContentEl.appendChild(questionEl);
    
    //answers to question 4
    var question4A = document.createElement("button");
    question4A.textContent = questions[3].answer1;
    question4A.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question4A);
    
    var question4B = document.createElement("button");
    question4B.textContent = questions[3].answer2;
    question4B.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question4B);
    
    var question4C = document.createElement("button");
    question4C.textContent = questions[3].answer3;
    question4C.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question4C);
    
    var question4D = document.createElement("button");
    question4D.textContent = questions[2].answer4;
    question4D.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question4D);

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("answer-button")
        [i].addEventListener("click" , () => {
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            questionEl.remove();
            question5();
        });
    }
}

function question5() {
    //question 5
    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[4].text;
    questionEl.setAttribute('id', 'questions');
    mainContentEl.appendChild(questionEl);
    
    //answers to question 5
    var question5A = document.createElement("button");
    question5A.textContent = questions[4].answer1;
    question5A.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question5A);
    
    var question5B = document.createElement("button");
    question5B.textContent = questions[4].answer2;
    question5B.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question5B);
    
    var question5C = document.createElement("button");
    question5C.textContent = questions[4].answer3;
    question5C.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question5C);
    
    var question5D = document.createElement("button");
    question5D.textContent = questions[4].answer4;
    question5D.setAttribute('class', 'answer-button')
    secondaryContentEl.appendChild(question5D);
    // var finalScore = timeRemaining
    // console.log(finalScore);

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("answer-button")
        [i].addEventListener("click" , () => {
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            document.querySelectorAll(".answer-button")[0].remove();
            questionEl.remove();
            displayResults();
            timeRemaining = 0
        });
    }
}

function displayResults() {
    document.querySelector(".page-content").remove();
    var scoreContainer = document.createElement("div");
    scoreContainer.setAttribute('class', 'final-score');
    footerEl.parentNode.insertBefore(scoreContainer, footerEl);
    var allDoneEl = document.createElement("h1");
    allDoneEl.textContent = "All Done!"
    allDoneEl.setAttribute("class", "align-left")
    scoreContainer.appendChild(allDoneEl);
    var finalScoreDisplayEl = document.createElement("h2")
    finalScoreDisplayEl.innerHTML = "Your final score is" 
}

function quizStart() {
    setInterval(function() {
    if (timeRemaining >= 1) {
        timerDurationEl.textContent = timeRemaining;
        timeRemaining--;
    } else {
        timerDurationEl.textContent = '0';
        clearInterval(timeInterval)
        displayResults();
    }
    }, 1000);

    removeStarterElements();
    question1();
}
startBtnEl.addEventListener("click",quizStart);