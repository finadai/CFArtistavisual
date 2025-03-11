const images = [
    'images/Fondo 1.jpg', 
    'images/Fondo 2.jpg',
    'images/Obra Presencia carbon y acrilico sobre lienzo 160x230.jpg'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length; // Ciclo a través de las imágenes
  }
  
  // Cambiar la imagen de fondo cada 1 segundo
  setInterval(changeBackgroundImage, 1000);
  
  // Inicializar con la primera imagen
  changeBackgroundImage();
  

  let indiceImagen = 0;

function mostrarImagen(n) {
    let imagenes = document.getElementsByClassName("imagen-contenedor");
    
    if (n >= imagenes.length) {
        indiceImagen = 0;
    } else if (n < 0) {
        indiceImagen = imagenes.length - 1;
    } else {
        indiceImagen = n;
    }

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none"; 
    }
    imagenes[indiceImagen].style.display = "block"; 
}

// Llamada inicial para mostrar la primera imagen
mostrarImagen(indiceImagen);

// Funciones para los botones de navegación
function moverCarrusel(n) {
    mostrarImagen(indiceImagen += n);
}


