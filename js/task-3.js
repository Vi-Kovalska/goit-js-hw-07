"use strict";
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const input = document.querySelector(".input");
const output = document.querySelector(".output");
input.addEventListener("input", (event) => {
output.textContent = event.currentTarget.value;
if (!event.currentTarget.value || event.currentTarget.value == " ") {
     output.textContent = "Anonymous";
  }
});