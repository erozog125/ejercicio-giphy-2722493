function buscarGifInicial() {
    var apiKey = "JUadMIxcxijsMFotrELyeRKJYCqheWsR";
    var palabrasAleatorias = ["random", "funny", "cute", "nature", "animals", "sports", "gaming", "music", "movies"];
    var query = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];
    var endpoint = "https://api.giphy.com/v1/gifs/search";
    var limit = 12;
    var url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarGifs(data.data);
        })
        .catch(error => console.error("Error al buscar GIFs:", error));
}

function buscarGif() {
    var apiKey = "JUadMIxcxijsMFotrELyeRKJYCqheWsR";
    var query = document.getElementById("searchInput").value;
    var endpoint = "https://api.giphy.com/v1/gifs/search";
    var limit = 10;
    var url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarGifs(data.data);
        })
        .catch(error => console.error("Error al buscar GIFs:", error));
}

function mostrarGifs(gifs) {
    var gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";

    gifs.forEach(gif => {
        var gifUrl = gif.images.fixed_height.url;
        var gifElement = document.createElement("img");
        gifElement.setAttribute("src", gifUrl);
        gifElement.setAttribute("alt", "GIF");
        gifElement.classList.add("gif");
        gifContainer.appendChild(gifElement);
    });
}

window.onload = buscarGifInicial;
