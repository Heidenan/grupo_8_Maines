const loginForm = document.forms.login;
const fieldEmail = loginForm.email;
const fieldPassword = loginForm.password;
const submitButton = loginForm.submit;

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
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Ingrese un email por favor";
  }
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "El email no es valido";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "¡Email valido!";
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

  if (value.length < 1) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Ingrese una contraseña por favor";
  }
  let regex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "La contraseña debe incluir una mayuscula, un caracter especial y debe ser de 8 caracteres mínimo";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "¡La contraseña es segura!";
  }
});
