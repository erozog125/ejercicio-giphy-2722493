const API_KEY = "d59ZAY980DorGJk3vAYtU2bC32Y6jIjD";
const trending_endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
const search_endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

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

async function search() {
    const searchInput = document.getElementById("buscador").value;
    const endpoint = `${search_endpoint}&q=${searchInput}`;
    const gifs = await fetchGifs(endpoint);
    display(gifs);
  }
  async function TrendingGifs() {
    const gifs = await fetchGifs(trending_endpoint);
    display(gifs);
  }
  
  function display(gifs) {
    const gifContainer = document.getElementById("containers");
    gifContainer.innerHTML = "";
    gifs.forEach((gif) => {
      const gifElement = document.createElement("img");
      gifElement.src = gif.images.fixed_height.url;
      gifElement.classList.add("gif");
      gifContainer.appendChild(gifElement);
    });
  }
  
  window.onload = TrendingGifs;