// const { createElement } = require("react");


// create element
const foodDetails = document.createElement("p");
foodDetails.innerText = "this is biriyani";
foodDetails.style.fontSize = "40px";

// section access by id 
const foodTitle = document.getElementById("food-title");
console.log(foodTitle);

// append 
foodTitle.appendChild(foodDetails);