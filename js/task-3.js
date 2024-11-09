"use strict";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
input.addEventListener("input", (event) => {
output.textContent = event.currentTarget.value;
if (!event.currentTarget.value.trim() || event.currentTarget.value == " ") {
     output.textContent = "Anonymous";
  }
});