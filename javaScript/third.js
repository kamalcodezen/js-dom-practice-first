
// section create

const newSection = document.createElement("section");
newSection.setAttribute("id", "cities");

// h1 create
const headerEl = document.createElement("h1");
headerEl.innerText = "All cities";
headerEl.style.color = "red";
headerEl.style.fontSize = "60px";
headerEl.style.textAlign = "center";
headerEl.style.fontWeight = "700";

// appendChild
newSection.appendChild(headerEl);


const citiesName = document.createElement("ul");
citiesName.style.fontSize = "40px";
citiesName.style.textAlign = "center";



const list1 = document.createElement("li");
list1.innerText = "delhi";
list1.style.listStyle = "none"

const list2 = document.createElement("li");
list2.innerText = "mumbai";
list2.style.listStyle = "none"

const list3 = document.createElement("li");
list3.innerText = "kolkata";
list3.style.listStyle = "none"



citiesName.appendChild(list1);
citiesName.appendChild(list2);
citiesName.appendChild(list3);


newSection.appendChild(citiesName);


document.body.appendChild(newSection);

