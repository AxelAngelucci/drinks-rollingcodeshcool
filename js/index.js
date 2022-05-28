import { InitLocalStorage } from "./data/tragos.js";

const drinksStorage = JSON.parse(localStorage.getItem("drinksStorage"));

if (drinksStorage === false) {
  InitLocalStorage();
}

const { drinksAll, drinksVodka } = drinksStorage;

const cardsGin = document.getElementById("CardsGin");
const cardsDrinks = document.getElementById("CardsDrinks");
const cardVodka = document.getElementById("CardsVodka");
const fragment = document.createDocumentFragment();
const search = document.getElementById("search");
const resultadoSearch = document.getElementById("resultadoSearch");

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(search);
  const [name] = [...data.values()];
  if (!name.trim()) {
    resultadoSearch.textContent = "";
    return;
  }
  addCardsSearchDrinks(name);
});

const addCardsSearchDrinks = (name) => {
  const filtrado = drinksAll.filter((item) => item.strDrink.includes(name));
  resultadoSearch.textContent = "";
  filtrado.forEach((item) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");
    container.classList.add("card");
    container.setAttribute("style", "width: 18rem");
    image.classList.add("card-img-top");
    image.src = item.strDrinkThumb;
    link.classList.add(
      "card-text",
      "fs-4",
      "pt-4",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    link.setAttribute("id", "nombres-drinks");
    link.textContent = item.strDrink;
    link.href = "https://www.google.com.ar/?hl=es";
    container.appendChild(image);
    container.appendChild(link);
    fragment.appendChild(container);
    resultadoSearch.appendChild(fragment);
  });
};

const addCardsTrago = () => {
  const drinks = drinksAll.filter((item) => item.category === "2021");
  drinks.forEach((elemento) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");
    container.classList.add("card");
    container.setAttribute("style", "width: 18rem");
    image.classList.add("card-img-top");
    image.src = elemento.strDrinkThumb;
    link.classList.add(
      "card-text",
      "fs-4",
      "pt-4",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    link.setAttribute("id", "nombres-drinks");
    link.textContent = elemento.strDrink;
    link.href = "https://www.google.com.ar/?hl=es";
    container.appendChild(image);
    container.appendChild(link);
    fragment.appendChild(container);
    cardsDrinks.appendChild(fragment);
  });
};

const addCardsDrinkGin = () => {
  const drinksGin = drinksAll.filter((item) => item.category === "Gin");
  drinksGin.forEach((elemento) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");
    container.classList.add("card");
    container.setAttribute("style", "width: 18rem");
    image.classList.add("card-img-top");
    image.src = elemento.strDrinkThumb;
    link.classList.add(
      "card-text",
      "fs-4",
      "pt-4",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    link.setAttribute("id", "nombres-drinks");
    link.textContent = elemento.strDrink;
    link.href = "https://www.google.com.ar/?hl=es";
    container.appendChild(image);
    container.appendChild(link);
    fragment.appendChild(container);
    cardsGin.appendChild(fragment);
  });
};

const addCardsDrinkVodka = () => {
  const drinksVodka = drinksAll.filter((item) => item.category === "Vodka");
  drinksVodka.forEach((elemento) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");
    container.classList.add("card");
    container.setAttribute("style", "width: 18rem");
    image.classList.add("card-img-top");
    image.src = elemento.strDrinkThumb;
    link.classList.add(
      "card-text",
      "fs-4",
      "pt-4",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    link.setAttribute("id", "nombres-drinks");
    link.textContent = elemento.strDrink;
    link.href = "https://www.google.com.ar/?hl=es";
    container.appendChild(image);
    container.appendChild(link);
    fragment.appendChild(container);
    cardVodka.appendChild(fragment);
  });
};

addCardsTrago();
addCardsDrinkGin();
addCardsDrinkVodka();
