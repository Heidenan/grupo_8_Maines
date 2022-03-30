const registerForm = document.forms.register;
const fieldName = registerForm.name
const fieldLastName = registerForm.last_name;
const fieldEmail = registerForm.email;
const fieldUserName = registerForm.userName;
const fieldPassword = registerForm.password;


// Email field

fieldEmail.addEventListener("focus", () => {
  fieldEmail.classList.remove("error");
  fieldEmail.classList.remove("success");
  fieldEmail.classList.add("focus");
});
fieldEmail.addEventListener("keypress", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");

  if (value.length < 1) {
    event.target.classList.add("error");
  }
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Email is not valid";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Email is valid";
  }
});

// Password field

fieldPassword.addEventListener("focus", () => {
  fieldPassword.classList.remove("error");
  fieldPassword.classList.remove("success");
  fieldPassword.classList.add("focus");
});

fieldPassword.addEventListener("keyup", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");
  console.log(event.target.value);

  if (value.length < 1) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Password is required";
  }
  let regex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "La contraseña debe incluir una mayuscula, un caracter especial y contener 6 caracteres mínimo";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Password is valid";
  }


});

// Name field

fieldName.addEventListener("focus", () => {
  fieldName.classList.remove("error");
  fieldName.classList.remove("success");
  fieldName.classList.add("focus");
})

fieldName.addEventListener("keyup", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");
  console.log(event.target.value);

  if (value.length < 1) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Name is required";
  }
  let regex = /(^[A-z ,.'-]{2,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "El nombre no puede contener caracteres especiales, números y 6 caracteres mínimo";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Name is valid";
  }
})

// Last Name field

fieldLastName.addEventListener("focus", () => {
  fieldLastName.classList.remove("error");
  fieldLastName.classList.remove("success");
  fieldLastName.classList.add("focus");
});
fieldLastName.addEventListener("keyup", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");

  if (value.length < 1) {
    event.target.classList.add("error");
  }
  let regex = /(^[A-z ,.'-]{2,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Last Name is not valid";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Last Name is valid";
  }
})

// User Name field

fieldUserName.addEventListener("focus", () => {
  fieldUserName.classList.remove("error");
  fieldUserName.classList.remove("success");
  fieldUserName.classList.add("focus");
})
