import { InitLocalStorage } from "../js/data/tragos.js";


const drinksStorage = JSON.parse(localStorage.getItem("drinksStorage"));

if (drinksStorage === null) {
  InitLocalStorage();
}
const { drinksAll, drinksVodka } = drinksStorage;

const tableDrinks = document.getElementById("tableDrinks");
const fragment = document.createDocumentFragment();
const form = document.getElementById("form");

const addTableDrinks = () => {
  const drinksStorage2 = JSON.parse(localStorage.getItem("drinksStorage"));
  const { drinksAll } = drinksStorage2;
  drinksAll.forEach((elemento) => {
    const tr = document.createElement("tr");
    const idTh = document.createElement("th");
    const nameTd = document.createElement("td");
    const containerImage = document.createElement("td");
    const image = document.createElement("img");
    const containerButton = document.createElement("td");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");
    idTh.textContent = elemento.idDrink;
    idTh.setAttribute("id", "color-text");
    idTh.classList.add("text-center", "fw-bold", "fs-5", "id-text");
    nameTd.textContent = elemento.strDrink;
    nameTd.setAttribute("id", "color-text");
    nameTd.classList.add("text-center", "fw-bold", "fs-5", "px-5", "ms-5");
    image.classList.add("img-fluid", "w-25");
    image.src = elemento.strDrinkThumb;
    buttonEdit.setAttribute("type", "button");
    buttonEdit.classList.add("btn", "btn-warning");
    buttonEdit.textContent = "Edit";
    buttonDelete.setAttribute("type", "reset");
    buttonDelete.setAttribute("id", `${elemento.idDrink}`);
    buttonDelete.classList.add("btn", "btn-danger", "me-1", "mb-2");
    buttonDelete.textContent = "Delete";
    containerImage.classList.add("text-center", "w-50");
    containerImage.appendChild(image);
    containerButton.appendChild(buttonDelete);
    containerButton.appendChild(buttonEdit);
    tr.appendChild(idTh, nameTd, containerImage, containerButton);
    tr.appendChild(nameTd);
    tr.appendChild(containerImage);
    tr.appendChild(containerButton);
    fragment.appendChild(tr);
    tableDrinks.appendChild(fragment);
  });
};
addTableDrinks();

const idDrinks = document.querySelectorAll(".id-text");


tableDrinks.addEventListener("click", (e) => {
  e.preventDefault;
  const colorButton = e.target.classList[1];
  switch (colorButton) {
    case "btn-danger":
      
      if (true) {
        deleteDrink(e.target.id);
      }
      break;
    case "btn-warning":
      console.log("Funciona el edit");
  }
});

const deleteDrink = (id) => {
  const NewArray = drinksAll.filter((item) => item.idDrink !== id);
  localStorage.setItem(
    "drinksStorage",
    JSON.stringify({
      ...drinksStorage,
      drinksAll: NewArray,
    })
  );
  //indow.location.reload();
  console.log(NewArray);
};

//ESTE EL BOTON DE AGREGAR TRAGOS MODAL
const btnDrink = document.getElementById("btnSendModal");
btnDrink.onclick = (e) => {
  e.preventDefault();
  const strDrink = document.getElementById("NameDrink");
  const idDrink = document.getElementById("IdDrink");
  const strDrinkThumb = document.getElementById("ImageDrink");
  const category = document.getElementById("CategoryDrink");
  const page = document.getElementById("PageDrink");
  const newDrink = {
    strDrink: strDrink.value,
    strDrinkThumb: strDrinkThumb.value,
    idDrink: idDrink.value,
    category: category.value,
    page: page.value,
  };

  strDrink.value = "";
  idDrink.value = "";
  strDrinkThumb.value = "";
  idDrink.value = "";
  category.value = "";
  page.value = "";

  localStorage.setItem(
    "drinksStorage",
    JSON.stringify({
      ...drinksStorage,
      drinksAll: [...drinksStorage.drinksAll, newDrink],
    })
  );
  window.location.reload();
}
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const strDrink = document.getElementById("NameDrink");
//   const idDrink = document.getElementById("IdDrink");
//   const strDrinkThumb = document.getElementById("ImageDrink");
//   const category = document.getElementById("CategoryDrink");
//   const page = document.getElementById("PageDrink");
//   const newDrink = {
//     strDrink: strDrink.value,
//     strDrinkThumb: strDrinkThumb.value,
//     idDrink: idDrink.value,
//     category: category.value,
//     page: page.value,
//   };

//   strDrink.value = "";
//   idDrink.value = "";
//   strDrinkThumb.value = "";
//   idDrink.value = "";
//   category.value = "";
//   page.value = "";

//   localStorage.setItem(
//     "drinksStorage",
//     JSON.stringify({
//       ...drinksStorage,
//       drinksAll: [...drinksStorage.drinksAll, newDrink],
//     })
//   );
//   window.location.reload();
// });
