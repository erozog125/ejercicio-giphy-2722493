const API_KEY = "tRuUUCYD7V3ftlQLUKXzMmijYrk6Wjff";
const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;
const SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20`;

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

async function seekerGif() {
    const searchInput = document.getElementById("input").value;
    const endpoint = `${SEARCH_ENDPOINT}&q=${searchInput}`;
    const gifs = await fetchGifs(endpoint);
    displayGif(gifs);
  }
  async function displayTrendingGifs() {
    const gifs = await fetchGifs(TRENDING_ENDPOINT);
    displayGif(gifs);
  }
  
  function displayGif(gifs) {
    const gifContainer = document.getElementById("cards");
    gifContainer.innerHTML = "";
    gifs.forEach((gif) => {
      const gifElement = document.createElement("img");
      gifElement.src = gif.images.fixed_height.url;
      gifElement.classList.add("gif");
      gifContainer.appendChild(gifElement);
    });
  }
  
  window.onload = displayTrendingGifs;