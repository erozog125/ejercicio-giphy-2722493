const container = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const apiKey = "WUpVfdFrExV3pZhY7X2sSX1NsNMJso2b";

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim(); 
  if (searchTerm !== "") {
    fetchImages(searchTerm); 
  } else {
    alert("Please enter a search term."); 
  }
});

function fetchImages(searchTerm) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

  container.innerHTML = "";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = image.images.original.url;
        card.appendChild(img);

        const title = document.createElement("p");
        title.textContent = image.title;
        card.appendChild(title);

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
}
