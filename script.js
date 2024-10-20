// NAVBAR 

//DESPLIEGUE DEL MENÚ LATERAL

const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');

//función para abrir y cerrar el menú
menuButton.addEventListener('click', function () {
    menuContent.classList.toggle('active');
});

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    let isClickInsideMenu = navbar.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.classList.remove('active');
    }
});

// Cerrar el menú al hacer clic en un enlace dentro del menú
let menuLinks = document.querySelectorAll('#menuContent a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menuContent.classList.remove('active');
    });
});

