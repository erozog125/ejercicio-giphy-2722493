const URL = 'http://api.giphy.com/v1/gifs/trending?api_key=v50hGfFPuyFwU2IvqbxCFnz7yEOZZd4v';
const inputSeach = document.querySelector('.input-seach');
const btnSeach = document.querySelector('#seach');

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const gif = data.data
    ramdonGifs(gif, 10)
  })
  .catch(err => console.error(err));

function ramdonGifs(gif, count) {
  const showRandomGifs = [];

  while (showRandomGifs.length < count) {
    const randomIndex = Math.floor(Math.random() * gif.length)
    if (!showRandomGifs.includes(randomIndex)) {
      showRandomGifs.push(randomIndex);
    }

  }
  showRandomGifs.forEach(index => {
    const randomGif = gif[index];
    showGifs(randomGif);

  })

}

const contentGifs = document.querySelector('.content-gifs')
function showGifs(Gifs) {
  const { images, title } = Gifs
  const { url } = images.downsized
  const gif = document.createElement('img')
  gif.src = url
  gif.alt = title

  contentGifs.appendChild(gif);

}

//funcion de boton buscar y ENTER
btnSeach.addEventListener('click', () => {
  getValue();
})

inputSeach.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getValue();
  }
});

//capturar valor del input y mostrar coincidencias
function getValue() {

  contentGifs.innerHTML = "";

  const valueInput = inputSeach.value;
  const indexCoincidences = [];

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      const gifs = data.data;
      gifs.forEach((gif, index) => {
        const title = gif.title.toLowerCase();
        if (title.includes(valueInput)) {
          indexCoincidences.push(index);
        }
      });

      indexCoincidences.forEach(index => {
        const randomGif = gifs[index];
        showGifs(randomGif);

      })
      console.log('Índices de las coincidencias:', indexCoincidences);
    })
    .catch(err => console.error('Error al obtener datos de la API:', err));

}



