document.addEventListener('DOMContentLoaded', function () {
  const propertyModal = new bootstrap.Modal(document.getElementById('propertyModal'), {
      backdrop: 'static',
      keyboard: false
  });

  const propertyImage = document.getElementById('propertyImage');
  const propertyTitle = document.getElementById('propertyTitle');
  const propertyDetails = document.getElementById('propertyDetails');

  const carouselImages = document.querySelectorAll('.carousel-item img');
  carouselImages.forEach((img, index) => {
      img.addEventListener('click', () => {
          // Obtener los datos de la casa seleccionada desde el arreglo
          const selectedHouse = casasEnVenta[index];

          // Actualizar los elementos del modal con los datos de la casa
          propertyImage.src = selectedHouse.imagen;
          propertyTitle.textContent = selectedHouse.nombre;
          
          // Construir el texto de los detalles
          const detailsText = `
              Habitaciones: ${selectedHouse.habitaciones} |
              Baños: ${selectedHouse.banos} |
              Metros Cuadrados: ${selectedHouse.metrosCuadrados} |
              Precio: ${selectedHouse.precio} |
              Ciudad: ${selectedHouse.ubicacion}
          `;
          propertyDetails.textContent = detailsText;

          propertyModal.show();
      });
  });
});
