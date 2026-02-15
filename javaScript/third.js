


// section create

const newSection = document.createElement("section");
newSection.setAttribute("id", "cities");

// h1 create
const headerEl = document.createElement("h1");
headerEl.innerText = "All cities";

// appendChild
newSection.appendChild(headerEl);


const citiesName = document.createElement("ul");

const list1 = document.createElement("li");
list1.innerText = "delhi";
const list2 = document.createElement("li");
list2.innerText = "mumbai";
const list3 = document.createElement("li");
list3.innerText = "kolkata";

citiesName.appendChild(list1);
citiesName.appendChild(list2);
citiesName.appendChild(list3);


newSection.appendChild(citiesName);


document.body.appendChild(newSection);
