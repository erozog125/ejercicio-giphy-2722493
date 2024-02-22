document.addEventListener('DOMContentLoaded', () =>{

  function gif(done){
    const promiseURL = fetch('https://api.giphy.com/v1/gifs/categories?api_key=WUpVfdFrExV3pZhY7X2sSX1NsNMJso2b') 
  
    promiseURL
    .then(response => response.json())
    .then(data =>{
        done(data.data)
    })
    .catch(error => console.error('error searching gif', error));
  }
  

gif(character => {
    character.forEach(category => {
        const gifData = category.gif;
        const card = document.createRange().createContextualFragment(
           
          `
      
            <div class="cards">
                <h3>${category.name}</h3>
                <img src="${category.webp}" alt="${gifData.title}">
            </div>
  
          `
        );
        const section = document.querySelector('section');
        section.appendChild(card);
    });
  });
  
  




  gif(character =>{
    renderGifs(gifts)
  })
})

