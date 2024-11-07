"use strict";
const itemAllArray = Array.from(document.querySelectorAll(".item-menu"));
console.log(`Number of categories: ${itemAllArray.length}`);

const h2Array = Array.from(document.querySelectorAll("h2"));

for (let index = 0; index < h2Array.length; index++) {
    console.log(`Category: ${h2Array[index].textContent}`);
    console.log(`Elements: ${itemAllArray[index].children.length}`);
}