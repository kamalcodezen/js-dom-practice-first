
// comment box and new comment add
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {


    let textBox = document.getElementById("text-box");
    let text = textBox.value.trim();

    if (text === "") return;

    let newComment = document.createElement("p");
    newComment.innerText = text;
    newComment.classList.add("cmt");

    let cmtBox = document.getElementById("cmt-box");
    cmtBox.appendChild(newComment);

    textBox.value = "";

})


// mousemove Event 
const mouseEvent = document.getElementById("submit-btn")
    .addEventListener("mousemove", function () {
        console.log("mousemove");
    });


//mouseenter Event
const mouseEvent2 = document.getElementById("submit-btn")
    .addEventListener("mouseenter", function () {
        console.log("mouseEnter");
    });


// mouseleave Event
const mouseEvent3 = document.getElementById("submit-btn")
    .addEventListener("mouseleave", function () {
        console.log("mouseleave");
    });


// mouseout Event
const mouseEvent4 = document.getElementById("submit-btn")
    .addEventListener("mouseout", function () {
        console.log("mouseout");
    });




// input Event focus
const inputEvent = document.getElementById("input-name")
    .addEventListener("focus", function () {
        console.log("fucus");
    });


// input Event focusin
const inputEvent2 = document.getElementById("input-email")
    .addEventListener("focusin", function () {
        console.log("focusin");
    });


// input Event focusout
const inputEvent3 = document.getElementById("input-email")
    .addEventListener("focusout", function () {
        console.log("focusout");
    });


// keydown Event practice
const inputName = document.getElementById("input-name");
inputName.addEventListener("keydown", function () {
    console.log(inputName.value);
});


// keyup Event practice
const inputEmail = document.getElementById("input-email");
inputEmail.addEventListener("keyup", function () {
    console.log(inputEmail.value);
});





