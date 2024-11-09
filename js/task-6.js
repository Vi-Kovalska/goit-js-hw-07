"use strict";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  function createBoxes(amount) {
    if (amount >= 1 && amount <= 100) {
        let size = 30;
        for (let i = 1; i <= amount; i++) {
        const coloredDiv = document.createElement("div");
        coloredDiv.style.width = `${size}px`;
        coloredDiv.style.height = `${size}px`;
        coloredDiv.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(coloredDiv);
        size += 10;
        }
      }
  }
  const input = document.querySelector('#amountInput');
  const btnCreate = document.querySelector('#btnCreate');
  const btnDestroy = document.querySelector('#btnDestroy');
  const boxes = document.querySelector('#boxes');
  
  function create(event) {
    event.preventDefault();
    boxes.innerHTML = "";
    
    const amount = input.value;
    createBoxes(amount);
    
  }
  btnCreate.addEventListener('click', create);
  
  const destroyBoxes = () => {
    boxes.innerHTML = '';
    input.value = "";
  };
  btnDestroy.addEventListener('click', destroyBoxes);



