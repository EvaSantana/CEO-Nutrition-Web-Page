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

//CREACIÓN DE FORMULARIO

const contactUsBtn = document.querySelector('.contactUsBtn');
const contactFormOverlay = document.querySelector('.contactFormOverlay');

function createContactForm() {
    contactFormOverlay.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('contactForm');

    //Crear elementos del FORM uno a uno

    const title = document.createElement('h2');
    title.textContent = 'Contacta con nuestras profesionales';
    form.appendChild(title);

    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'firstName');
    firstNameLabel.textContent = 'Nombre:';
    form.appendChild(firstNameLabel);

    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('id', 'firstName');
    firstNameInput.setAttribute('name', 'firstName');
    firstNameInput.required = true;
    form.appendChild(firstNameInput);


    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'lastName');
    lastNameLabel.textContent = 'Apellidos:';
    form.appendChild(lastNameLabel);

    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('id', 'lastName');
    lastNameInput.setAttribute('name', 'lastName');
    lastNameInput.required = true;
    form.appendChild(lastNameInput);


    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Correo electrónico:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;
    form.appendChild(emailInput);


    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Teléfono de contacto:';
    form.appendChild(phoneLabel);

    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'number');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('name', 'phone');
    phoneInput.required = true;
    form.appendChild(phoneInput);


    // Botón de enviar
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Enviar';
    form.appendChild(submitBtn);

    // Añadir evento para el envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mostrar el mensaje pop-up
        showPopup('Formulario enviado con éxito. ¡Gracias por contactarnos!');

        // limpiar el formulario
        form.reset();
    });

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = message;

        // Añadir el pop-up al contenedor del formulario
        contactFormOverlay.appendChild(popup);

        // Desaparecer el pop-up después de 3 segundos
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }

    // Botón de cerrar
    const closeFormBtn = document.createElement('button');
    closeFormBtn.setAttribute('type', 'button');
    closeFormBtn.classList.add('closeFormBtn');
    closeFormBtn.textContent = 'Cerrar';
    form.appendChild(closeFormBtn);

    //Añadir formulario al overlay
    contactFormOverlay.appendChild(form);

    // Añadir evento para cerrar el formulario
    closeFormBtn.addEventListener('click', function () {
        contactFormOverlay.classList.remove('active');
    });


}

// Al hacer clic en el botón "Contact Us", crear y mostrar el formulario
contactUsBtn.addEventListener('click', function () {
    createContactForm();
    contactFormOverlay.classList.add('active');
});



// CARRUSEL DE CABECERA

document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.carouselImage');
    const totalImages = images.length;

    const imageWidth = 300;
    const wrapper = document.querySelector('.carousel-wrapper');

    let currentIndex = 0;
    let autoScrollInterval;

    function updateCarousel() {
        const offset = -currentIndex * imageWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
    }



    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(nextImage, 5000);
    }

    showImage(currentIndex);
    autoScrollInterval = setInterval(nextImage, 5000);

});