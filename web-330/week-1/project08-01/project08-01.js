"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Leslie Khattarchebli
      Date: 5/31/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//constructor function for timer object
function timer(min, sec) {
  timer.minutes = min;
  timer.seconds = sec;
  timer.timeID = null;
}

timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    this.timeID = null;
}

  else {
    timer.timeID = window.setInterval(countdown, 1000);
}
}

function countdown () {
  if (timer.seconds > 0) {
    timer.seconds = timer.seconds -= 1;
  }

  else if (timer.minutes > 0) {
    timer.minutes = timer.minutes -= 1;
    timer.seconds = 59;
  }

  else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  minBox.value = timer.minutes;
  secBox.value = timer.seconds
}


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = function() {
  myTimer.minutes = minBox.value
}

secBox.onchange = function() {
  myTimer.seconds = secBox.value
}

runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
}