"use strict";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const input = document.querySelector('#amountInput');
  function create(event) {
    event.preventDefault();
    boxes.innerHTML = "";
    
    const amount = input.value;
    createBoxes(amount);
  }

  const btnCreate = document.querySelector('#btnCreate');
  btnCreate.addEventListener('click', create);
  

  function creaateMarkup() {
    if (+(amount) < 0 || +(amount) > 100) {
        alert('The number must be from 1 to 100 inclusive');
        return;
        }
        createBoxes(amount);  
      }
      const boxes = document.querySelector('#boxes');
      let size = 30;
  function createBoxes(amount) {
          const arr = [];
          for (let i = 1; i <= amount; i++) {
          const coloredDiv = document.createElement("div");
          coloredDiv.style.width = `${size}px`;
          coloredDiv.style.height = `${size}px`;
          coloredDiv.style.backgroundColor = getRandomHexColor();
          
          arr.push(coloredDiv);
        
          size += 10;
        }
        boxes.append(...arr);
      }
      
const btnDestroy = document.querySelector('#btnDestroy');
  const destroyBoxes = () => {
    boxes.innerHTML = '';
    input.value = "";
  };
  btnDestroy.addEventListener('click', destroyBoxes);



