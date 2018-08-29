

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const lapBtn = document.querySelector(".js-timer-lap");
const resetBtn = document.querySelector(".js-timer-reset");
const timer = document.querySelector(".timer");



let timerId = null;
// let startTime = Date.now();
let startTime;
let newDeltaTime = 0;

let miliSec = null;
let sec = null;
let min = null;

let deltaTime = 0;

let isActive = false;

startBtn.addEventListener("click", startTimer);
lapBtn.addEventListener("click", lapTimer);
resetBtn.addEventListener("click", resetTimer);


function startTimer() {
  if (!isActive) {
    startBtn.textContent = `Pause`;
    startTime = Date.now();
    isActive = true;
    console.log("Start Timer");
    timerId = setInterval(updateCurrent, 100);
  }
  else {
      startBtn.textContent = `Continue`;
      stopTimer();
  }
}

function updateCurrent() {
  const currentTime = Date.now();
  deltaTime = currentTime - startTime + newDeltaTime;
  const time = new Date(deltaTime);
  min = time.getMinutes();
  min <= 9 ? (min = "0" + min) : min;
  sec = time.getSeconds();
  sec <= 9 ? (sec = "0" + sec) : sec;
  miliSec = Number.parseInt(time.getMilliseconds() / 100);
  clockface.textContent = `${min}:${sec}.${miliSec}`;
}

function stopTimer() {
  if (isActive) {
    isActive = false;
    newDeltaTime = deltaTime;
    clearInterval(timerId);
    console.log(deltaTime);
    console.log("Stop Timer");
  }
}


function resetTimer() {
    clearInterval(timerId);
    isActive = false;
    miliSec = null;
    sec = null;
    min = null;
    clockface.textContent = `00:00.0`;  
    
}

function lapTimer () {
    console.log(clockface.textContent);
    const newP = document.createElement("p");
    timer.append(newP);
    newP.textContent = clockface.textContent;
}