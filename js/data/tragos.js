const drinksAll = [
  {
    strDrink: "1-900-FUK-MEUP",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
    idDrink: "15395",
    category: "2021",
    page: "../../pages/products/fuk_me_up.html",
  },
  {
    strDrink: "110 in the shade",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
    idDrink: "15423",
    category: "2021",
    page: "../../pages/products/in_the_shade.html",
  },
  {
    strDrink: "151 Florida Bushwacker",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
    idDrink: "14588",
    category: "2021",
    page: "../../pages/products/florida_Bushwacker.html",
  },
  {
    strDrink: "Absolut limousine",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/ssqpyw1472719844.jpg",
    idDrink: "14372",
    category: "2021",
    page: "../../pages/products/absolut-limousine.html",
  },
  {
    strDrink: "24k nightmare",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    idDrink: "17060",
    category: "2021",
    page: "../../pages/products/nightmare.html",
  },
  {
    strDrink: "252",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    idDrink: "15288",
    category: "2021",
    page: "../../pages/products/drink_252.html",
  },
  {
    strDrink: "3 Wise Men",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
    idDrink: "13899",
    category: "2021",
    page: "../../pages/products/wise_Men.html",
  },
  {
    strDrink: "Adam Sunrise",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg",
    idDrink: "15567",
    category: "2021",
    page: "../../pages/products/adamSunrise.html",
  },
  {
    strDrink: "410 Gone",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    idDrink: "13581",
    category: "2021",
    page: "../../pages/products/gone.html",
  },
  {
    strDrink: "50/50",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
    idDrink: "14598",
    category: "2021",
    page: "../../pages/products/dink_50_50.html",
  },
  {
    strDrink: "3-Mile Long Island Iced Tea",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    idDrink: "15300",
    category: "Gin",
    page: "../../pages/products/Mile_Long_Island_Iced_Tea.html",
  },
  {
    strDrink: "69 Special",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
    idDrink: "13940",
    category: "Gin",
    page: "../../pages/products/special.html",
  },
  {
    strDrink: "A1",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    idDrink: "17222",
    category: "Gin",
    page: "../../pages/products/a1.html",
  },
  {
    strDrink: "Abbey Cocktail",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
    idDrink: "17834",
    category: "Gin",
    page: "../../pages/products/abbey_Cocktail.html",
  },
  {
    strDrink: "Abbey Martini",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
    idDrink: "17223",
    category: "Gin",
    page: "../../pages/products/abbey_Martini.html",
  },
  {
    strDrink: "155 Belmont",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
    idDrink: "15346",
    category: "Vodka",
    page: "../../pages/products/belmont.html",
  },
  {
    strDrink: "Atlantic Sun",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg",
    idDrink: "13423",
    category: "Vodka",
    page: "../../pages/products/adamSunrise.html",
  },
  {
    strDrink: "57 Chevy with a White License Plate",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
    idDrink: "14029",
    category: "Vodka",
    page: "../../pages/products/chevy_with_a_White_license_Plate.html",
  },
  {
    strDrink: "747 Drink",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg",
    idDrink: "178318",
    category: "Vodka",
    page: "../../pages/products/drink-747.html",
  },
  {
    strDrink: "A Gilligan's Island",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
    idDrink: "16943",
    category: "Vodka",
    page: "../../pages/products/gilligan's_Island.html",
  },
];

const drinksVodka = [{ 2: 0 }];

const InitLocalStorage = () => {
  localStorage.setItem("drinksStorage", JSON.stringify({ drinksAll }));
};

export { drinksVodka, drinksAll, InitLocalStorage };
