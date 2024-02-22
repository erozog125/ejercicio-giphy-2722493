const API_KEY = "LeuS1PAyEtRvOAinsXSawT7uDjePHAym";
const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`;
const SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=10`;

async function fetchGifs(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
}

async function searchGifs() {
  const searchInput = document.getElementById("searchInput").value;
  const endpoint = `${SEARCH_ENDPOINT}&q=${searchInput}`;
  const gifs = await fetchGifs(endpoint);
  displayGifs(gifs);
}

async function displayTrendingGifs() {
  const gifs = await fetchGifs(TRENDING_ENDPOINT);
  displayGifs(gifs);
}

function displayGifs(gifs) {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = "";
  gifs.forEach((gif) => {
    const gifElement = document.createElement("img");
    gifElement.src = gif.images.fixed_height.url;
    gifElement.classList.add("gif");
    gifContainer.appendChild(gifElement);
  });
}

window.onload = displayTrendingGifs;
