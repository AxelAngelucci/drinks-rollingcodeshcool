import { InitLocalStorage } from "/drinks-rollingcodeshcool/js/data/tragos";

const drinksStorage = JSON.parse(localStorage.getItem("drinksStorage"));

if (drinksStorage === null) {
  InitLocalStorage();
}
const { drinksAll, drinksVodka } = drinksStorage;

const tableDrinks = document.getElementById("tableDrinks");
const fragment = document.createDocumentFragment();
const btnNewDrink = document.getElementById("btnNewDrink");
const btnSendModal = document.getElementById("btnSendModal");

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
    image.classList.add("img-fluid", "col-1");
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
      alert("¿Deseas borrar el trago?");
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
  window.location.reload();
};

//ESTE EL BOTON DE AGREGAR TRAGOS MODAL

class newDrink {
  constructor(id, name, categoria, image, pag) {
    this.id = id;
    this.name = name;
    this.categoria = categoria;
    this.image = image;
    this.pag = pag;
  }
}

btnSendModal.addEventListener("click", (e) => {
  const newIdDrink = document.getElementById("newIdDrink").value;
  const newNameDrink = document.getElementById("newNameDrink").value;
  const newImageDrink = document.getElementById("newImageDrink").value;
  const newPageDrink = document.getElementById("newPageDrink").value;
  const newCategoryDrink = document.getElementById("newCategoryDrink").value;
  const drink = new newDrink(
    newIdDrink,
    newNameDrink,
    newCategoryDrink,
    newImageDrink,
    newPageDrink
  );
});
