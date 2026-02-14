

const tagNames = document.getElementsByTagName("h1");

// console.log(tagNames);

for (const tagName of tagNames) {
    // console.log(tagName);
}


const listItem = document.getElementsByClassName("list");
// console.log(listItem);
for (let list of listItem) {
    // console.log(list.innerText);
}



const foods = document.getElementById("food");
// console.log(foods);


const foods1 = document.querySelector("#food")
console.log(foods1.innerText);


// const foodsItem = document.querySelectorAll(".list");
// // console.log(foodsItem)
// for (let food of foodsItem) {
//     food.style.background = "cyan";
//     food.style.fontSize = "40px";
//     food.style.marginBottom = "30px"
//     food.style.borderRadius = "10px";
// }


const foodItem = document.querySelectorAll("#food");
for (let food of foodItem) {
    food.classList.add("all-list")
    food.classList.remove("all-list")
}