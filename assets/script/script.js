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
function timerStart() {
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
startBtnEl.addEventListener("click",timerStart);