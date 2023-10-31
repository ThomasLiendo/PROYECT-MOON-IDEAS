$(document).ready(function () {
  let currentImage = 0;
  const images = $("#image-carousel img");

  function showImage(index) {
    images.removeClass("active");
    images.eq(index).addClass("active");
  }

  showImage(currentImage);

  // Configura un intervalo para cambiar las imágenes cada 3 segundos

  setInterval(function () {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
  }, 3000);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const shopItem = document.querySelector(".menu-item");

  shopItem.addEventListener("click", function () {
    shopItem.classList.toggle("active");
  });
});

//Con estos cambios, el submenú se mostrará cuando se haga clic en "Shop" y se ocultará cuando se vuelva a hacer clic en él. El JavaScript agrega o quita la clase "active" en el elemento "Shop" para controlar la visibilidad del submenú. Puedes personalizar los estilos y la animación según tus preferencias.
document.addEventListener("DOMContentLoaded", function () {
  const shopItem = document.querySelector(".menu-item");
  const subMenuShop = shopItem.querySelector(".sub-menu");

  const nuevaColeccionItem = document.querySelectorAll(".menu-item")[1]; // El segundo elemento con clase "menu-item" es "Nueva Colección"
  const subMenuNuevaColeccion = nuevaColeccionItem.querySelector(".sub-menu");

  let isShopMenuOpen = false;
  let isNuevaColeccionMenuOpen = false;

  shopItem.addEventListener("click", function (e) {
    e.preventDefault(); // Evitar que el enlace de "SHOP" se siga cuando haces clic
    isShopMenuOpen = !isShopMenuOpen;
    subMenuShop.style.display = isShopMenuOpen ? "block" : "none";

    // Cerrar el submenú de "Nueva Colección" si está abierto
    if (isNuevaColeccionMenuOpen) {
      isNuevaColeccionMenuOpen = false;
      subMenuNuevaColeccion.style.display = "none";
    }
    e.stopPropagation(); // Evitar que el evento de clic en el documento se propague
  });

  nuevaColeccionItem.addEventListener("click", function (e) {
    e.preventDefault(); // Evitar que el enlace de "Nueva Colección" se siga cuando haces clic
    isNuevaColeccionMenuOpen = !isNuevaColeccionMenuOpen;
    subMenuNuevaColeccion.style.display = isNuevaColeccionMenuOpen
      ? "block"
      : "none";

    // Cerrar el submenú de "SHOP" si está abierto
    if (isShopMenuOpen) {
      isShopMenuOpen = false;
      subMenuShop.style.display = "none";
    }
    e.stopPropagation(); // Evitar que el evento de clic en el documento se propague
  });

  document.addEventListener("click", function () {
    isShopMenuOpen = false;
    isNuevaColeccionMenuOpen = false;
    subMenuShop.style.display = "none";
    subMenuNuevaColeccion.style.display = "none";
  });

  // Evitar que los clics dentro de los submenús cierren los submenús
  subMenuShop.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  subMenuNuevaColeccion.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

//Con estos ajustes, el submenú de "Nueva Colección" debería abrirse y cerrarse correctamente al hacer clic, y se asegurará de que si un submenú está abierto, el otro se cierre automáticamente.
