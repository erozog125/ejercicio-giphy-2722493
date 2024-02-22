document.addEventListener('DOMContentLoaded', () => { // Espera a que toda la pagina cargue para ejecutar el backend
  
  const buscador = document.getElementById('buscador'); // llamamos el id del input de html
  function gif(done){
    const promiseURL = fetch('https://api.giphy.com/v1/gifs/categories?api_key=WUpVfdFrExV3pZhY7X2sSX1NsNMJso2b') // obtnemos los gifs de la API
  
    promiseURL
    .then(response => response.json()) // Convertimos los datos recibidos en un objeto
    .then(data => {
        done(data.data); // Llama a la función 'done' con los datos de los gifs
    })
    .catch(error => console.error('error searching gif', error)); // Maneja los errores cuando no carga lanza error
  }
  
  function mostrarGifs(categorias) {
    const section = document.querySelector('section'); // Seleccionamos la sección donde se mostrarán los GIFs
    section.innerHTML = ''; // Limpiamos el contenido anterior de la sección
    
    // Limitamos el número de GIFs a mostrar como tendencia
    const gifsTendencia = categorias.slice(0, 5); // muestro solo 5 
    
    gifsTendencia.forEach(category => { // Recorremos cada categoría de GIFs tendencia
        const gifData = category.gif; // Obtenemos todos los datos del GIF de la categoría
        const card = document.createRange().createContextualFragment( // Creamos un fragmento de DOM para la tarjeta del GIF
            `
            <div>
            <h2>${category.name}</h2>
            <img src="${gifData.images.original.url}" alt="${gifData.title}">
        </div>
        `
            
        );
        section.appendChild(card); // Agregamos la tarjeta del GIF a la sección
    });
}

//buscador
  gif(categorias => { // Llama a la función para tener todos los gifs por categorias
    mostrarGifs(categorias); // Muestra las categorías de GIFs
    
    buscador.addEventListener('input', () => {  //spera recibir lo que escribimos en el input
      const busqueda = buscador.value.toLowerCase(); // si hemos escrito en mayuscula lo cambia todo a minisculuas
      const categoriasFiltradas = categorias.filter(category => category.name.toLowerCase().includes(busqueda)); // busca lo que coinicda con lo que buscamos
      mostrarGifs(categoriasFiltradas); // Muestra las categorías de GIFs buscadas
    });
  });

});


