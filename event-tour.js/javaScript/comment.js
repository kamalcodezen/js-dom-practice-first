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

