//SERVICES//

/*
ESTO LAS SLIDE TODAS A LA VEZ CUANDO EL MOUSE ESTA ENCIMA DEL AREA DE TEXTO

const service1Text = document.getElementById("service1Text");
const service2Text = document.getElementById("service2Text");
const service3Text = document.getElementById("service3Text");
const service4Text = document.getElementById("service4Text");

const service1 = document.getElementsByClassName("service1");
const service2 = document.getElementsByClassName("service2");
const service3 = document.getElementsByClassName("service3");
const service4 = document.getElementsByClassName("service4");

service1Text.addEventListener("mouseover", slide);
service3Text.addEventListener("mouseover", slide);
service2Text.addEventListener("mouseover", slide);
service4Text.addEventListener("mouseover", slide);

function slide() {
    if(service1Text && service3Text && service2Text && service4Text) {
        service1Text.classList.add("slideLeft");
        service3Text.classList.add("slideLeft");
        service2Text.classList.add("slideRight");
        service4Text.classList.add("slideRight");
    };
}
*/

const services = document.querySelectorAll(".service13");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            entry.target.classList.add("slideLeft");
        } 
    });
});

services.forEach( function(service) {
    observer.observe(service);
});

const services2 = document.querySelectorAll(".service24");

const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("slideRight");
        } 
    });
});

services2.forEach(function (service) {
    observer2.observe(service);
});

//REVIEWS//

const reviewsCarrusel = document.querySelector(".reviewsCarrusel");
const reviewers = document.querySelectorAll(".reviewsCarrusel .reviewer");
let currentReview = 0;
let intervalId = null;
const totalReviews = reviewers.length;

const visibleReviews = 3; // Número de revisores visibles
const step = 2000 / visibleReviews; // Porcentaje de desplazamiento por paso

function showReviewer(index) {
    reviewers.forEach((reviewer, i) => {
        reviewer.classList.remove("active"); // Remueve la clase activa de todos
        if (i === index) {
            reviewer.classList.add("active");
        }
    });
}

function autoPlay() {
    intervalId = setInterval(nextSlide, 2000);
}

function nextSlide() {
    currentReview = (currentReview + 1) % totalReviews;
    showReviewer(currentReview);
}

autoPlay();
showReviewer(currentReview);



