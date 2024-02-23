/* buscarGifInicial*/
async function buscarGifInicial() {
    let apiKey = "ZTFRE42dTEv4S5htqryQnRa2OZ2qyoAu";
    let palabrasAleatorias = ["random", "funny", "cute", "nature", "animals", "sports", "gaming", "music", "movies"];
    let query = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];
    let endpoint = "https://api.giphy.com/v1/gifs/search";
    let limit = 12;
    let url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarGifs(data.data);
    } catch (error) {
        console.error("Error  buscar GIFs:", error);
    }
}

/*  Cambios función buscarGif*/
async function buscarGif() {
    let apiKey = "ZTFRE42dTEv4S5htqryQnRa2OZ2qyoAu";
    /* Obtener el valor del input directamente */
    let query = document.getElementById("searchInput").value;
    let endpoint = "https://api.giphy.com/v1/gifs/search";
    let limit = 10;
    let url = `${endpoint}?api_key=${apiKey}&q=${query}&limit=${limit}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarGifs(data.data);
    } catch (error) {
        console.error("Error  buscar GIFs:", error);
    }
}

/*Cambio la función mostrarGifs*/
function mostrarGifs(gifs) {
    let gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";

    gifs.forEach(gif => {
        let gifUrl = gif.images.original.url;
        let gifElement = document.createElement("img");
        gifElement.setAttribute("src", gifUrl);
        gifElement.setAttribute("alt", "GIF");
        gifElement.classList.add("gif");
        gifContainer.appendChild(gifElement);
    });
}


window.onload = buscarGifInicial;