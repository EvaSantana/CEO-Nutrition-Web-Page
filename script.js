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
    currentIndex= (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
function prevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function resetAutoScroll() {
clearInterval(autoScrollInterval);
autoScrollInterval=setInterval (nextImage, 3000);
}


document.querySelector('.nextBtn').addEventListener('click', () => {
    nextImage();
    resetAutoScroll();
});


document.querySelector('.prevBtn').addEventListener('click', () => {
    prevImage();
    resetAutoScroll();
});

showImage(currentIndex);
autoScrollInterval= setInterval(nextImage,3000);

});