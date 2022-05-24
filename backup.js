const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
let r = []
const api = async()=>{
    let response = await fetch(endpoint);
    let data = await response.json();
    r = await [...data.drinks];
    console.log(r);
    return data;
}
api();