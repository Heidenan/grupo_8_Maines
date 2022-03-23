const loginForm = document.forms.login;
const fieldEmail = loginForm.email;
const fieldPassword = loginForm.password;

fieldEmail.addEventListener("focus", () => {
  fieldEmail.classList.remove("error");
  fieldEmail.classList.remove("success");
  fieldEmail.classList.add("focus");
});
fieldEmail.addEventListener("keyup", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");

  if (value.length < 1) {
    evento.target.classList.add("error");
  }
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

fieldPassword.addEventListener("focus", () => {
  fieldEmail.classList.remove("error");
  fieldEmail.classList.remove("success");
  fieldEmail.classList.add("focus");
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
