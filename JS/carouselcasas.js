// Obtén una referencia al contenedor del carousel
var carouselContainer = document.getElementById("carouselHouses");

// Obtén las tres primeras casas del listado desde propiedades.js
var casasParaMostrar = casasEnVenta.slice(0, 3); // Asumiendo que tu arreglo de casas se llama casasEnVenta (que proviene de propiedades.js)

casasParaMostrar.forEach(function(casa, index) {
    // Crea un elemento div para la casa
    var casaDiv = document.createElement("div");
    casaDiv.classList.add("carousel-item");
  
    // Crea la imagen de la casa
    var casaImg = document.createElement("img");
    casaImg.classList.add("d-block", "w-100");
    casaImg.src = casa.imagen;
    casaImg.alt = casa.nombre;
  
    // Crea el contenido del caption de la casa
    var captionDiv = document.createElement("div");
    captionDiv.classList.add("carousel-caption");
    captionDiv.innerHTML = `
      <div class="group1">
        <h3>${casa.nombre}</h3>
        <p>Habitaciones: ${casa.habitaciones}</p>
        <p>Baños: ${casa.banos}</p>
      </div>
      <div class="group2">
        <p>Metros Cuadrados: ${casa.metrosCuadrados}</p>
        <p>Precio: ${casa.precio}</p>
      </div>
      <div class="group3">
        <p>Ubicación: ${casa.ubicacion}</p>
      </div>
    `;
  
    // Agrega la imagen y el caption al div de la casa
    casaDiv.appendChild(casaImg);
    casaDiv.appendChild(captionDiv);
  
    // Agrega la casa al contenedor del carousel
    carouselContainer.appendChild(casaDiv);
  
    // Marca la primera casa como activa
    if (index === 0) {
      casaDiv.classList.add("active");
    }
});
