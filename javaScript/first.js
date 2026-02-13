
const tagNames = document.getElementsByTagName("h1");

// console.log(tagNames);

for (const tagName of tagNames) {
    // console.log(tagName);
}


const listItem = document.getElementsByClassName("list");
console.log(listItem);
for (let list of listItem) {
    console.log(list.innerText);
}

