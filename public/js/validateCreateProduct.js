const productForm = document.forms.createProduct;
const fieldName = productForm.name;
const fieldDescription = productForm.description;
const fieldPrice = productForm.price;
const fieldAvatar = productForm.file;

// Name field

fieldName.addEventListener("focus", () => {
  fieldName.classList.remove("error");
  fieldName.classList.remove("success");
  fieldName.classList.add("focus");
});

fieldName.addEventListener("blur", () => {
  fieldName.classList.remove("error");
  fieldName.classList.remove("success");
  fieldName.classList.remove("focus");
});
fieldName.addEventListener("keyup", (event) => {
  event.target.classList.remove("error");
  event.target.classList.remove("focus");
  event.target.classList.remove("success");
  let value = event.target.value;
  let fieldset = event.target.parentElement;
  let feed = fieldset.querySelector(".feedback");
  console.log(value);

  if (value.length < 1) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "Name is required";
  }
  let regex = /(^[A-z ,.'-]{5,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML =
      "El nombre debe tener 5 caracteres mínimo y no puede tener caracteres especiales ni numeros";
  } else {
    event.target.classList.remove("error");
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Name is valid";
  }
});

fieldDescription.addEventListener("focus", () => {
  fieldDescription.classList.remove("error");
  fieldDescription.classList.remove("success");
  fieldDescription.classList.add("focus");
});

fieldDescription.addEventListener("blur", () => {
  fieldDescription.classList.remove("error");
  fieldDescription.classList.remove("success");
  fieldDescription.classList.remove("focus");
});
fieldDescription.addEventListener("keyup", (event) => {
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
    feed.innerHTML = "Descripcion is required";
  }
  let regex = /([\w+\s]{19,})+$/;
  if (!regex.test(value)) {
    event.target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "La descripcion debe tener como minimo 20 caraceteres.";
  } else {
    event.target.classList.remove("error");
    event.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "Descripción Válida";
  }
});

fieldAvatar.addEventListener("change", (evento) => {
  let target = evento.target;
  let value = target.files;
  let fieldset = evento.target.parentElement;
  let feed = fieldset.querySelector(".feedback");

  let regex = /^image\//;
  if (!regex.test(value[0].type)) {
    target.classList.add("error");
    feed.classList.add("error");
    feed.innerHTML = "El archivo no es una imagen";
  } else {
    evento.target.classList.add("success");
    feed.classList.remove("error");
    feed.classList.add("success");
    feed.innerHTML = "El archivo es una imagen";
  }
});
