
const URL = `http://api.giphy.com/v1/gifs/trending?api_key=qxkJOmMCgXIHBvdItmlOGPTxw3McOqfT`;
const main = document.querySelector('.main-container'); 

function apiGet() {
  fetch(URL)
  .then(response => response.json())
  .then(response => {
    const gifs = response.data;
    createCard(gifs);
  })
  .catch(err => console.error(err));
}

function createCard(gifs) {
  for (let i = 0; i < 10; i++) {

    const div = document.createElement('div');
    div.classList.add('div-container');
    
    const img = document.createElement('img');
    img.classList.add('img-gif');
    
    const titleGif = document.createElement('p');
    titleGif.classList.add('p-title');
    
    main.appendChild(div);
    div.appendChild(img);
    div.appendChild(titleGif);
    
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    const { title, images } = gif;
    const { url } = images.downsized;
    
    img.src = url;
    img.alt = title;
    titleGif.textContent = title;
  }
}

function filterByCategory() {
  const InputFiltre = document.getElementById('InputFiltre')
  const category = InputFiltre.value.toLowerCase();
  const div = document.querySelectorAll('.div-container');
  
  div.forEach(container => {
    const titleGif = container.querySelector('p').textContent.toLowerCase();
    if (titleGif.includes(category)) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none'; 
    }
  });
}
InputFiltre.addEventListener('input',filterByCategory);
document.addEventListener('DOMContentLoaded', apiGet);


