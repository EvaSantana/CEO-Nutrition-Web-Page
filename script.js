//SERVICES//
// ESTO LAS SLIDE TODAS A LA VEZ CUANDO EL MOUSE ESTA ENCIMA DEL AREA DE TEXTO//

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


// NO OLVIDAR QUITAR ESTO AL FINAL //
service1Text.addEventListener("animationend", slideEnd);
service3Text.addEventListener("animationend", slideEnd);
service2Text.addEventListener("animationend", slideEnd);
service4Text.addEventListener("animationend", slideEnd);

function slideEnd() {
    if (service1Text && service3Text && service2Text && service4Text) {
        service1Text.classList.remove("slideLeft");
        service3Text.classList.remove("slideLeft");
        service2Text.classList.remove("slideRight");
        service4Text.classList.remove("slideRight");
    };
}
// NO OLVIDAR QUITAR ESTO AL FINAL //


//REVIEWS CARRUSEL//

