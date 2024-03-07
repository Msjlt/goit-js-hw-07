"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const targetForm = event.target;
  const email = targetForm.elements.email.value.trim();
  const password = targetForm.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);

  form.reset();
}
