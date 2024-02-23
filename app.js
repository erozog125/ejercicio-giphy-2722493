const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.6.1' } };
const URL = 'http://api.giphy.com/v1/gifs/trending?api_key=uGDE8ichpZAJWyEuCk2TNyGM4JZ7mWgy'
fetch(URL, options)
  .then(response => response.json())
  .then(data => Recomendado(data.data))
  .catch(err => console.error(err));

function Recomendado(gifs) {
  const gridContainer = document.querySelector('.reacciones .grid-container'); // Selecciona el contenedor correcto

  for (let i = 0; i < 5; i++) {
    const { url, images, title } = gifs[i];

    const containerCard = document.createElement('li');
    containerCard.classList.add('grid-container');
    const imgCard = document.createElement('img');
    imgCard.src = images.fixed_height.url;
    imgCard.alt = title;
    const titleCard = document.createElement('p');
    titleCard.textContent = title;
    containerCard.appendChild(imgCard);
    containerCard.appendChild(titleCard);

    gridContainer.appendChild(containerCard);
  }
}



