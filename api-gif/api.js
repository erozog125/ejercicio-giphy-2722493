document.addEventListener('DOMContentLoaded', () => {


    function gif(done){
        const promiseURL = fetch('https://api.giphy.com/v1/gifs/categories?api_key=WUpVfdFrExV3pZhY7X2sSX1NsNMJso2b') 
    
        promiseURL
        .then(response => response.json())
        .then(data =>{
            done(data.data)
        })
        .catch(error => console.error('error searching gif', error));
    }


    function renderGifs(gifts){
        const main = document.querySelector('main');
        main.innerHTML = '';

        gifts.forEach(category => {
            const gifData = category.gif;
            const card = document.createRange().createContextualFragment(
                `
                <div>
                    <h2>${category.name}</h2>
                    <img src="${gifData.images.original.url}" alt="${gifData.title}">
                    <p>${gifData.title}</p>
                </div>
                `
            );
            main.appendChild(card);
        });
    }





    gif(gifts => {
        renderGifs(gifts);
    });

    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        
        gif(gifts => {
            const filteredGifts = gifts.filter(category => category.name.toLowerCase().includes(searchTerm));
            renderGifs(filteredGifts);
        });
    });

});
