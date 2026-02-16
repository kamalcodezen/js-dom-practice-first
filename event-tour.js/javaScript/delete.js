const inputDelete = document.getElementById("input-delete");

const btnDelete = document.getElementById("delete-btn");

inputDelete.addEventListener("keyup", function (event) {
    let inputVal = event.target.value;

    if (inputVal === "delete") {
        btnDelete.removeAttribute("disabled");

    } else {
        btnDelete.setAttribute("disabled", true)
    }

})

btnDelete.addEventListener("click", function () {
    let hideText = document.getElementById("main-text");
    hideText.style.display = "none";
})


