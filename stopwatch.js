let seconds = 0;
let minutes = 0;
let interval;
let isRunning = false;

function updateDisplay() {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const stopwatch = document.getElementsByClassName("stopwatch")[0];
    stopwatch.innerHTML = `<p>${formattedMinutes}:${formattedSeconds}</p>`;
}

function incrementTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function start() {
    if (!isRunning) {
        interval = setInterval(incrementTime, 1000);
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
    updateDisplay();  
}

document.getElementsByClassName("start")[0].addEventListener("click", start);
document.getElementsByClassName("stop")[0].addEventListener("click", stop);