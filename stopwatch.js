let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMilliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    const stopwatch = document.getElementsByClassName("stopwatch")[0];
    stopwatch.innerHTML = `<p>${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}</p>`;
}

function incrementTime() {
    milliseconds += 10; 

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function start() {
    if (!isRunning) {
        interval = setInterval(incrementTime, 10); 
        isRunning = true;
    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    updateDisplay();
}

document.getElementsByClassName("start")[0].addEventListener("click", start);
document.getElementsByClassName("stop")[0].addEventListener("click", stop);
document.getElementsByClassName("reset")[0].addEventListener("click", reset);
