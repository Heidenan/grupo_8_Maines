const productForm = document.forms.product;
const fieldName = createForm.name
const fieldDescription = createForm.description;
const fieldPrice = createForm.price;


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
  let regex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
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


// User Name field

fieldUserName.addEventListener("focus", () => {
  fieldUserName.classList.remove("error");
  fieldUserName.classList.remove("success");
  fieldUserName.classList.add("focus");
})
