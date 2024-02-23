function buscarGifInicial() {
    let apiKey = "pWyTBl9Twn7NM2jANxpEf2RO08KZwWnA";
    let palabrasAleatorias = ["random", "funny", "cute", "nature", "animals", "sports", "gaming", "music", "movies"];
    let query = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];
    let endpoint = "https://api.giphy.com/v1/gifs/search";
    let limit = 15;
    let url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarGifs(data.data);
        })
        .catch(error => console.error("Error al buscar GIFs:", error));
}

function buscarGif() {
    let apiKey = "pWyTBl9Twn7NM2jANxpEf2RO08KZwWnA";
    let query = document.getElementById("searchInput").value;
    let endpoint = "https://api.giphy.com/v1/gifs/search";
    let limit = 10;
    let url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarGifs(data.data);
        })
        .catch(error => console.error("Error al buscar GIFs:", error));
}

function mostrarGifs(gifs) {
    let gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";

    gifs.forEach(gif => {
        let gifUrl = gif.images.fixed_height.url;
        let gifElement = document.createElement("img");
        gifElement.setAttribute("src", gifUrl);
        gifElement.setAttribute("alt", "GIF");
        gifElement.classList.add("gif");
        gifContainer.appendChild(gifElement);
    });
}

window.onload = buscarGifInicial;
