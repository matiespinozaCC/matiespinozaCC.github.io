  const propertyModal = new bootstrap.Modal(document.getElementById('propertyModal'), {
    backdrop: 'static',
    keyboard: false
  });

  const propertyImage = document.getElementById('propertyImage');
  const propertyTitle = document.getElementById('propertyTitle');
  const propertyDetails = document.getElementById('propertyDetails');

  const carouselImages = document.querySelectorAll('.carousel-item img');
  carouselImages.forEach((img) => {
    img.addEventListener('click', () => {
      const title = img.getAttribute('data-title');
      const rooms = img.getAttribute('data-rooms');
      const bathrooms = img.getAttribute('data-bathrooms');
      const area = img.getAttribute('data-area');
      const price = img.getAttribute('data-price');
      const imageUrl = img.getAttribute('src');
      const city = img.getAttribute('data-city')

      propertyImage.src = imageUrl; // Actualiza la fuente de la imagen
      propertyTitle.textContent = title;
      propertyDetails.textContent = `Habitaciones: ${rooms} | Baños: ${bathrooms} | Metros Cuadrados: ${area} | Precio: ${price} | Ciudad: ${city}`;

      propertyModal.show();
    });
  });
