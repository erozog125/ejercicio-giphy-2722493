const searchUrl = "https://api.giphy.com/v1/gifs/search";
const trendingUrl = "https://api.giphy.com/v1/gifs/trending";
const key = "?api_key=vLp1vatdaWeMDe4W5Rh0m2ijYU4RhnoS";
const limite = "&limit=40";

const btn = document.getElementById("btn");

btn.onclick = () => {
  const q = document.getElementById("busqueda").value.trim();
  let urlCompleta = trendingUrl + key + limite;
  if (q !== "") {
    urlCompleta = searchUrl + key + "&q=" + q + limite;
  }
  getData(urlCompleta);
};

const getData = async (urlCompleta) => {
  try {
    const response = await fetch(urlCompleta);
    const giphy = await response.json();
    console.log(giphy);
    displayGifs(giphy.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayGifs = (data) => {
  const portfolio = document.getElementById("portfolio");
  portfolio.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const gif = document.createElement("img");
    gif.src = data[i].images.original.url;
    gif.className = "mb-3";
    portfolio.appendChild(gif);
  }
};

getData(trendingUrl + key + limite);
