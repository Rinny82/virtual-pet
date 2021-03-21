// const Pet = require("./src/pet");

const idle = {start: 1254, end: 1672, offset: 209, interval: 2500}
const feed = {start: 209*13, end: 209*19, offset: 209, interval: 500}
const walk = {start: 1254, end: 1672, offset: 209, interval: 2500}
const sleep = {start: 1254, end: 1672, offset: 209, interval: 2500}

let tID; // clear the setInterval()
function stopAnimate() {
  clearInterval(tID);
}

function animateIdle(start, end, offset, interval) {
  stopAnimate()
  let position = start; 
  
  tID = setInterval(() => {
    document.getElementById(
      "sprite"
    ).style.backgroundPosition = `0px -${position}px`;

    if (position < end) {
      position = position + offset;
    }

    else {
      position = start;
    }

  }, interval); //end of setInterval
} //end of animateIdle()

function animateScript(start, end, offset, interval) {
  stopAnimate()
  let position = start; 
  
  tID = setInterval(() => {
    document.getElementById(
      "sprite"
    ).style.backgroundPosition = `0px -${position}px`;

    if (position < end) {
      position = position + offset;
    }

    else {
      clearInterval(tID); 
      animateIdle(idle.start,idle.end,idle.offset,idle.interval);
    }

  }, interval); //end of setInterval
} //end of animateScript()


// initial animation
animateIdle(idle.start,idle.end,idle.offset,idle.interval);

window.onmousedown = e => {
  let buttonId = e.target.id;
  console.log(buttonId)
  document.getElementById(buttonId).classList.add("button-down");
  if ( buttonId === 'feed'){
    animateScript(feed.start,feed.end,feed.offset,feed.interval)
  }
} 

window.onmouseup = e => {
  document.getElementById(e.target.id).classList.remove("button-down");
} 
