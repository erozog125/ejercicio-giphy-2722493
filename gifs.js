document.addEventListener("DOMContentLoaded", function() {
  fetchRM();
});

const addedUrls = new Set();

function createCard(title, url) {
  if (!addedUrls.has(url) && addedUrls.size < 3) {
    const card = document.createElement('div');
    const name = document.createElement('h3');
    name.textContent = title;
    const image = document.createElement('img'); 
    image.alt = 'GIF';
    card.appendChild(name);
    card.appendChild(image);
    document.getElementById('cardContainer').appendChild(card);
    addedUrls.add(url);
  }
}

function fetchRM() {
  const options = { method: 'GET' };
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZB7ftENSbA1H3yJLldjZtXyJRJMxFMIc', options)
    .then(response => response.json())
    .then(data => {
      data.data.slice(0, 10).forEach(gif => {
        const title = gif.title;
        const url = gif.images.original.url;
        createCard(title, url);
      });
    })
    .catch(err => console.error('Error: ', err));
}

  

document.addEventListener ("DoMloaded", function() {
  fetch
})
