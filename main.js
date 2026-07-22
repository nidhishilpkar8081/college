const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click',() =>{
    navMenu.classList.toggle('active');
});


let slideIndex= 1;
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;

const slideWidth=100;


const firstSlide = slide[0].cloneNode(true);
const lastSlide = slide[totalSlides - 1].cloneNode(true);


slides.appendChild(firstSlide);
slides.insertBefore(lastSlide, slide[0]);


slides.style.transform = "translateX(-" + slideWidth + "%)";

function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides + 1){
        slideIndex =1;
        slides.style.transition ="none";
        slides.style.transform = "translateX(-" + slideWidth + "%)";
        setTimeout(() => {
    slides.style.transition ="transform 1.5s ease";
        },20);
    } else{
        slides.style.transition = "transform 1.5s ease";
        slides.style.transform = "translateX(-" + (slideIindex * slideWidth) + "%)";
    }
}

function prevSlide() {
    slideIndex--;
    if (slideIndex <=0 ){
        slideIndex = totalSlides;
        slides.style.transition = "none";
        slides.style.transform = "translateX(-" + (totalslides * slideWidth) + "%)";
        setTimeout(() => {
        slides.style.transition = "transform 1.5s ease";
    },20);
}else {
    slides.style.transition = "transform 1.5s ease";
   slides.style.transform = "translateX(-" + (slideIndex * slideWidth) + "%)";
}
}

setInterval(nextSlide,5000);


function plusSlides(n) {
    if (n > 0){
        nextSlide();
    }else {
        prevSlide();
    }
}
