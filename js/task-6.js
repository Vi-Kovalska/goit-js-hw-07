"use strict";
const input = document.querySelector(".input");
const btnCreate = document.querySelector(".btn-create"); 
const btnDestroy = document.querySelector(".btn-destroy"); 
const div = document.querySelector("#boxes");

// слухач події на інпут в якому отримуємо дані що ввів користувач - зберігаємо у змінну number
const inputData = () => {
const number = event.target.value;
console.log(number);
return number;
}
// return console.log(input.value);
// }
const amount = inputData;
input.addEventListener("input", inputData);

// додаєм слухач подіїї на створення елементів div такої кількості що зберігається у змінній number

const createBoxes = (amount) => {
    if (amount >= 1 && amount <= 100){
        for (let i = 1; i = amount; i++) {
           div.insertAdjacentHTML("afterbegin", `<div class="color-div" width=30px height=30px></div>`);
           const colorDiv = document.querySelector(".color-div");
           colorDiv.style.backgroundColor = getRandomHexColor();
                if((colorDiv.width > "30px")&&(colorDiv.height > "30px")){
                         colorDiv.width += 10;
                         colorDiv.height += 10;
                          }
           }
       
     }
return input.value = "";
};
btnCreate.addEventListener("submit", createBoxes);
//    створюєм елементи div такої ж кількості що зберігається у змінній number
    // const arrEl = [];
    

//     const rectangle = document.createElement("div");
//      console.log(rectangle);
// // задаємо стиль для div - ширина висота
//     rectangle.classList.add("rectangl");
//     rectangle.style.width = "30px";
//     rectangle.style.height = "30px";
//     arrEl.push(rectangle);

   
// // задаємо стиль рандомний колір із функціїї для кожно діва 
// rectangle.style.backgroundColor = getRandomHexColor();

// return arrEl;

// }
// // додаємо крок +10рх до висоти і ширини кожного наступного div
// arrEl.reduce((acc, el) => {
//     rectangle.width = `${el + acc}`;
//     rectangle.height = `${el + acc}`;
// }, 10);
// rectangle.append("div");


// створили слухача події натискання на кнопку видалення створених елементів, remuve
const destroyBoxes = () => {
return div.innerHTML = "";
}
btnDestroy.addEventListener("submit", destroyBoxes);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
