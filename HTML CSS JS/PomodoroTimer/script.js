const startElem = document.querySelector(".start");
const stopElem = document.querySelector(".stop");
const resetElem = document.querySelector(".reset");
const timerElem = document.querySelector(".timer");

startElem.addEventListener("click", startTimer);
stopElem.addEventListener("click", stopTimer);
resetElem.addEventListener("click", resetTimer);


let interval;
let timeLeft = 1500;
function updateTimer() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    let formattedTime = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    timerElem.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

