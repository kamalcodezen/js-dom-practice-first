// <!-- option 2 click handler -->

function makeBlue() {
    document.body.style.background = "blue";
}


// <!-- option 3 click handler -->

const makePurpleBtn = document.getElementById("make-purple-btn");


makePurpleBtn.onclick = function makePurple() {
    document.body.style.background = "purple";
}


const makePurpleBtn2 = document.getElementById("make-purple2-btn");

makePurpleBtn2.onclick = function makePurple() {
    document.body.style.background = "rgba(128, 0, 128, 0.48)"
}


// <!-- option 4 click handler -->

const makeYellowBtn = document.getElementById("make-yellow-btn");

makeYellowBtn.onclick = makeYellow;
function makeYellow() {
    document.body.style.background = "yellow"
}