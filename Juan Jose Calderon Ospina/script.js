const url = "https://api.giphy.com/v1/gifs/search";
let busqueda = "?q=";
const key = "&api_key=vLp1vatdaWeMDe4W5Rh0m2ijYU4RhnoS";
const limite = "&limit=40";

let q = "";
let urlCompleta = "";

const btn = document.getElementById("btn");

btn.onclick = () => {

    document.getElementById('portfolio').innerHTML="";

  q = document.getElementById("busqueda").value;
  urlCompleta = url + busqueda + q + key + limite;
  gedData();
};

const gedData = async () => {
  await fetch(urlCompleta)
    .then((response) => {
      return response.json();
    })
    .then((giphy) => {
      console.log(giphy);

      for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement("img");

        gif.src = giphy.data[i].images["original"].url;
        gif.className = "mb-3";
        document.getElementById("portfolio").appendChild(gif);
      }
    });
};

gedData();
