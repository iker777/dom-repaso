// 1. Menú hamburguesa
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("abierto");
});

// 2. Sección acordeón
const titulos = document.querySelectorAll(".acordeon-titulo");

titulos.forEach((titulo) => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    // Cerrar todos los demás
    document.querySelectorAll(".acordeon-item").forEach((el) => {
      if (el !== item) el.classList.remove("abierto");
    });

    // Alternar la actual
    item.classList.toggle("abierto");
  });
});

// 3. Navbar Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 4. Galeria
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".imagen").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

cerrar.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Opcional: cerrar al hacer clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// 5. Botón oscuro
const darkLight = document.querySelector(".dark-light")
darkLight.innerHTML = '🌙'
darkLight.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    document.body.classList.value=="dark-mode"?darkLight.innerHTML = '🌞':darkLight.innerHTML = '🌙'
})

