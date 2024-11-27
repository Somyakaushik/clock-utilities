let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let alarmHrs = document.getElementById("alarm-hrs");
let alarmMin = document.getElementById("alarm-min");
let setAlarmBtn = document.getElementById("set-alarm");
let stopAlarmBtn = document.getElementById("stop-alarm");
let alarmMsg = document.getElementById("alarm-msg");

let alarmTime = null;
let alarmActive = false;
let alarmSound = new Audio('audio/meow-billie-eilish.mp3');

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    if (alarmActive && alarmTime === `${currentTime.getHours()}:${currentTime.getMinutes()}`) {
        alarmMsg.innerHTML = "ALARM RINGING!";
        alarmMsg.style.color = "#ff0000";

        if (alarmSound.paused) {
            alarmSound.play();
        }

        stopAlarmBtn.disabled = false;
        alarmActive = false;
    }
}, 1000);


setAlarmBtn.addEventListener("click", () => {
    let hours = alarmHrs.value;
    let minutes = alarmMin.value;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    if (hours && minutes && hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        alarmTime = `${hours}:${minutes}`;
        alarmActive = true;
        alarmMsg.innerHTML = `Alarm set for ${alarmTime}`;

        alarmSound.pause();
        alarmSound.currentTime = 0;
        stopAlarmBtn.disabled = true;
    } else {
        alarmMsg.innerHTML = "Invalid Time. Try again!";
    }
});

stopAlarmBtn.addEventListener("click", () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmMsg.innerHTML = "Alarm Stopped.";
    stopAlarmBtn.disabled = true;
});
