const imgCardsContainer = document.querySelector('.gif-container'); // 
const inputCategoria = document.getElementById('inputCategoria');

function getAPI() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=iJuoyi69OZrpRoCMWbDkam6vhbug4sfT')
    .then(response => response.json())
    .then(response => {const gifs = response.data;
        createCard(gifs);
    })
    .catch(err => console.error(err));
}
function createCard(gifs) {
  for (let i = 0; i < 10; i++) {

    const containerGif = document.createElement('div');
    const imgCard = document.createElement('img');
    const nameGif = document.createElement('p');
    containerGif.classList.add('containerGif');

    imgCardsContainer.appendChild(containerGif);
    containerGif.appendChild(imgCard);
    containerGif.appendChild(nameGif);
    
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    const { title, images,} = gif;
    const { url } = images.downsized;
    
    imgCard.src = url;
    imgCard.alt = title;
    nameGif.textContent = title;
}
}
function filterByTitle() {
    const category = inputCategoria.value.toLowerCase();
    const containerGif = document.querySelectorAll('.containerGif');
  
    containerGif.forEach(container => {
      const nameGif = container.querySelector('p').textContent.toLowerCase();
      if (nameGif.includes(category)) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none'; 
      }
    });
  }
inputCategoria.addEventListener('input', filterByTitle);
document.addEventListener('DOMContentLoaded', getAPI);