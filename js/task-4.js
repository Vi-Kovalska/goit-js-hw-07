"use strict";

const form = document.querySelector(".login-form");

const user = {};

form.addEventListener("submit", event => {
	event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        return alert ("All form fields must be filled in");
      }
user.login = email.trim();
user.password = password.trim();
console.log(user);
      form.reset();
});

