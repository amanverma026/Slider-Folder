
const body = document.body;
const slidesContainer = document.querySelector('.slider-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const lowerImgBox = document.querySelector('.lower-img-box');
let activeSlide = 0;

// Generate divs based on the number of images in lower-img-box
lowerImgBox.querySelectorAll('img').forEach((img, index) => {
    const div = document.createElement('div');
    div.classList.add('slide');
    div.style.backgroundImage = `url('${img.src}')`;
    slidesContainer.appendChild(div);
});

const slides = document.querySelectorAll('.slide');

function setActiveSlide(index) {
    activeSlide = index;
    updateButtonsVisibility();
    setBgToBody();
    setActiveSlides();
    setActiveImg();
}

function setActiveImg() {
    const lowerImgItems = document.querySelectorAll('.lower-img-box img');
    lowerImgItems.forEach((img, index) => {
        if (index === activeSlide) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

rightBtn.addEventListener('click', () => {
    if (activeSlide < slides.length - 1) {
        setActiveSlide(activeSlide + 1);
    }
});

leftBtn.addEventListener('click', () => {
    if (activeSlide > 0) {
        setActiveSlide(activeSlide - 1);
    }
});

lowerImgBox.addEventListener('click', (event) => {
    const clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
    if (clickedIndex !== -1) {
        setActiveSlide(clickedIndex);
    }
});

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlides() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}

// Initial button visibility setup
function updateButtonsVisibility() {
    if (activeSlide === 0) {
        leftBtn.classList.add('hidden');
    } else {
        leftBtn.classList.remove('hidden');
    }

    if (activeSlide === slides.length - 1) {
        rightBtn.classList.add('hidden');
    } else {
        rightBtn.classList.remove('hidden');
    }
};
