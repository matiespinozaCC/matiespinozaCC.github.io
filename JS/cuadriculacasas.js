// Función para agregar una propiedad al contenedor
function agregarPropiedad(propiedad, index) {
  const propiedadesContainer = document.getElementById("propiedades-container");

  // Crear un elemento de propiedad
  const propiedadElement = document.createElement("div");
  propiedadElement.classList.add("propiedad");

  // Agrega un atributo data-index con el índice de la propiedad
  propiedadElement.setAttribute("data-index", index);

  // Crear la estructura interna de la propiedad
  propiedadElement.innerHTML = `
      <img src="${propiedad.imagen}" alt="${propiedad.nombre}">
      <h2>${propiedad.nombre}</h2>
      <p>Habitaciones: ${propiedad.habitaciones}</p>
      <p>Baños: ${propiedad.banos}</p>
      <p>Metros Cuadrados: ${propiedad.metrosCuadrados}</p>
      <p>Precio: ${propiedad.precio}</p>
      <p>Ubicación: ${propiedad.ubicacion}</p>
      <button type="button" class="btn btn-warning" onclick="verDetalles(${index})">Ver Detalles</button>
  `;

  // Agregar la propiedad al contenedor
  propiedadesContainer.appendChild(propiedadElement);
}

// Modifica la llamada a forEach para pasar el índice como segundo argumento
casasEnVenta.forEach((propiedad, index) => agregarPropiedad(propiedad, index));

// Función para mostrar los detalles de una propiedad
function verDetalles(index) {
  // Obtén la propiedad por su índice
  const propiedad = casasEnVenta[index];

  // Aquí puedes mostrar los detalles de la propiedad como desees
  // Por ejemplo, podrías abrir un modal o redirigir a una página de detalles
  alert(`Detalles de ${propiedad.nombre}:\nHabitaciones: ${propiedad.habitaciones}\nBaños: ${propiedad.banos}\nMetros Cuadrados: ${propiedad.metrosCuadrados}\nPrecio: ${propiedad.precio}\nUbicación: ${propiedad.ubicacion}`);
}

// Obtén una referencia al campo de búsqueda
const searchInput = document.getElementById("search-input");

// Agrega un evento input al campo de búsqueda para detectar cambios en el texto
searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase(); // Obtén el valor del campo de búsqueda en minúsculas

    // Itera sobre todas las propiedades
    casasEnVenta.forEach((propiedad, index) => {
        const ubicacion = propiedad.ubicacion.toLowerCase(); // Obtén la ubicación de la propiedad en minúsculas
        const propiedadElement = document.querySelector(`[data-index="${index}"]`); // Obtén el elemento de la propiedad por su índice

        // Comprueba si la ubicación de la propiedad contiene el término de búsqueda
        if (ubicacion.includes(searchTerm)) {
            propiedadElement.style.display = "block"; // Muestra la propiedad si coincide
        } else {
            propiedadElement.style.display = "none"; // Oculta la propiedad si no coincide
        }
    });
});
