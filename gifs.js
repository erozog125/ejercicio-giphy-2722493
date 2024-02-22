document.addEventListener("DOMContentLoaded", function() {
  fetchTrendingGIFs();
});

const addedUrls = new Set();

function createCard(title, url, containerId) {
  const card = document.createElement('div');
  card.classList.add('cardContainer2'); 
  const name = document.createElement('h3');
  name.textContent = title;

  const image = document.createElement('img');
  image.alt = 'GIF';
  image.src = url;

  card.appendChild(name);
  card.appendChild(image);

  document.getElementById(containerId).appendChild(card);
}

function fetchTrendingGIFs() {
  const options = { method: 'GET' };
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZB7ftENSbA1H3yJLldjZtXyJRJMxFMIc', options)
      .then(response => response.json())
      .then(data => {
          data.data.slice(0, 3).forEach(gif => { 
              const title = gif.title;
              const url = gif.images.original.url;
              createCard(title, url, 'trendingCards'); 
          });
      })
      .catch(err => console.error('Error fetching trending GIFs: ', err));
}

function createCard(title, url, containerId) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardContainer2');

  const name = document.createElement('h4');
  name.textContent = title;

  const image = document.createElement('img');
  image.alt = 'GIF';
  image.src = url;

  cardContainer.appendChild(name);
  cardContainer.appendChild(image);

  document.getElementById(containerId).appendChild(cardContainer);
}

document.addEventListener("DOMContentLoaded", function() {

  fetchSearchedGIFs(); 

  const form = document.getElementById('search');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const searcher = document.getElementById('searcher').value;
    fetchSearchedGIFs(searcher);
  });
});

function fetchSearchedGIFs(category = "") {
  const apiKey = "ZB7ftENSbA1H3yJLldjZtXyJRJMxFMIc";
  let url;
  if (category.trim() === "") {
    url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  } else {
    url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=5`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('searchedCards').innerHTML = '';
      if (data.data && data.data.length > 0) {
        data.data.forEach(gif => {
          const title = gif.title;
          const imageURL = gif.images.original.url;
          createCard(title, imageURL, 'searchedCards'); 
        });
      } else {
        console.log("No se encontraron GIFs.");
      }
    })
    .catch(err => console.log('Error fetching searched GIFs: ', err));
}
