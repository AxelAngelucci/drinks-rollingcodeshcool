const name1 = document.getElementById("name");
const email = document.getElementById("email");
const country = document.getElementById("country");
const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault;
  if (name1.value.lenght < 5) {
    alert("El nombre ingresado es incorrecto");
  }
});
