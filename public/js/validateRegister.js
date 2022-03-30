const registerForm = document.forms.register;
const fieldName = registerForm.name;
const fieldLastName = registerForm.last_name;
const fieldEmail = registerForm.email;
const fieldUserName = registerForm.userName;
const fieldPassword = registerForm.password;
const fieldAvatar = registerForm.avatar;

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

// Name field

fieldName.addEventListener("focus", () => {
  fieldName.classList.remove("error");
  fieldName.classList.remove("success");
  fieldName.classList.add("focus");
});

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
    feed.innerHTML = "Ingrese un nombre por favor";
  }
  let regex = /(^[A-z ,.'-]{2,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "El nombre debe contener al menos dos caracteres y no se admiten caracteres especiales o números";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "¡El nombre es valido!";
  }
});

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
    feed.classList.add("error");
    feed.innerHTML = "Ingrese un apellido por favor";
  }
  let regex = /(^[A-z ,.'-]{2,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "El apellido debe contener al menos dos caracteres y no se admiten caracteres especiales o números";
  } else {
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "¡El apellido es valido!";
  }
});

// User Name field

fieldUserName.addEventListener("focus", () => {
  fieldUserName.classList.remove("error");
  fieldUserName.classList.remove("success");
  fieldUserName.classList.add("focus");
});

// Avatar field
fieldAvatar.addEventListener("change", (evento) => {
  let target = evento.target;
  let value = target.files;
  let fieldset = evento.target.parentElement;
  let feed = fieldset.querySelector(".feedback");

  let regex = /^image\//;
  if (!regex.test(value[0].type)) {
    target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "El archivo no es una imagen, solo se admiten extensiones JPG, JPEG, PNG y GIF";
  } else {
    evento.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "¡El archivo es una imagen!";
  }
});
