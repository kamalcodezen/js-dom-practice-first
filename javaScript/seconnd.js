// const { createElement } = require("react");


// create element
const foodDetails = document.createElement("p");
foodDetails.innerText = "this is biriyani";

// section access by id 
const foodTitle = document.getElementById("food-title");
console.log(foodTitle);

// append 
foodTitle.appendChild(foodDetails);