const apiKey = 'RvWAGyRwnV8BJfVjCQt3pm9n22BpvPAQ';

async function searchGIFs() {
    const searchTerm = document.getElementById('searchInput').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const gifContainer = document.getElementById('gifContainer');
        gifContainer.innerHTML = '';

        data.data.forEach(gif => {
            const gifElement = document.createElement('img');
            gifElement.src = gif.images.fixed_height.url;
            gifElement.classList.add('gif');
            gifContainer.appendChild(gifElement);
        });
    } catch (error) {
        console.error('Error fetching and displaying GIFs:', error);
    }
}

async function getTrendingGIFs() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const gifContainer = document.getElementById('gifContainer');
        gifContainer.innerHTML = '';

        data.data.forEach(gif => {
            const gifElement = document.createElement('img');
            gifElement.src = gif.images.fixed_height.url;
            gifElement.classList.add('gif');
            gifContainer.appendChild(gifElement);
        });
    } catch (error) {
        console.error('Error fetching and displaying trending GIFs:', error);
    }
}

getTrendingGIFs();