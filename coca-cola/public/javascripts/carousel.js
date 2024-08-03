let currentIndex = 0;
let featureIndex = 0;
let featureInterval;
let slideInterval;

function showSlide(index) {
    const slides = $('.slide');
    const indicators = $('.indicator');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    $('.img-slider').css('transform', `translateX(${offset}%)`);
    indicators.removeClass('active').eq(currentIndex).addClass('active');
}

function showFeature(index) {
    const featureSlides = $('.card-feature');
    const featureIndicators = $('.indicator-fea');

    if (index >= featureSlides.length) {
        featureIndex = 0;
    } else if (index < 0) {
        featureIndex = featureSlides.length - 1;
    } else {
        featureIndex = index;
    };

    const offset = -featureIndex * 100;
    $('.feature-img-slider').css('transform', `translateX(${offset}%)`);
    featureIndicators.removeClass('active').eq(featureIndex).addClass('active');
};

function nextSlide() {
    showSlide(currentIndex + 1);
    showFeature(featureIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

$(document).ready(function () {
    showSlide(currentIndex);
    showFeature(featureIndex);
    startSlideShow();

    $('.next').click(function () {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    $('.prev').click(function () {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    $('.indicator').click(function () {
        stopSlideShow();
        const index = $(this).index();
        showSlide(index);
        startSlideShow();
    });

    $('.indicator-fea').click(function() {
        stopSlideShow();
        const index = $(this).index();
        showFeature(index);
        startSlideShow();
    })

    $('.slider').hover(stopSlideShow, startSlideShow); // Pause on hover, resume on mouse leave
});