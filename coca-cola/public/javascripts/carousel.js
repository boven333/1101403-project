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
    // slideInterval = setInterval(nextSlide, 5000);
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

    $('.indicator-fea').click(function () {
        stopSlideShow();
        const index = $(this).index();
        showFeature(index);
        startSlideShow();
    })

    $('.slider').hover(stopSlideShow, startSlideShow); // Pause on hover, resume on mouse leave

    let $doubleCard = $('#double-card');
    let doubleCard = $doubleCard.offset().top;
    let $pepsif = $('#pepsi-jobs-f');
    let pepsiPosf = $pepsif.offset().top;
    let $pepsit = $('#pepsi-jobs-t');
    let pepsiPost = $pepsif.offset().top;
    let $feature = $('#feature-news-container');
    let featurePos = $feature.offset().top;

    $(window).on('scroll', function () {
        //double card
        if ($(this).scrollTop() > doubleCard) {
            $('#double-card').addClass('collapsed');
        } else {
            $('#double-card').removeClass('collapsed');
        }

        // pepsi content jobs
        if ($(this).scrollTop() > pepsiPosf + 50) {
            $('#pepsi-jobs-f').addClass('pepsi-collapsed');
        } else {
            $('#pepsi-jobs-f').removeClass('pepsi-collapsed');
        }

        if ($(this).scrollTop() > pepsiPost + 50) {
            $('#pepsi-jobs-t').addClass('pepsi-collapsed');
        } else {
            $('#pepsi-jobs-t').removeClass('pepsi-collapsed');
        }

        // feature
        if ($(this).scrollTop() > featurePos) {
            $('#feature-news-container').addClass('feature-collapsed');
        } else {
            $('#feature-news-container').removeClass('feature-collapsed');
        }


        // Hover event for btn-jobs-1
        $('#btn-jobs-1').hover(
            function () {
                $('#img-right-jobs').addClass('changeBg');
            },
            function () {
                $('#img-right-jobs').removeClass('changeBg');
            }
        );

        $('#btn-jobs-2').hover(
            function () {
                $('#img-right-jobs-2').addClass('changeBg2');
            },
            function () {
                $('#img-right-jobs-2').removeClass('changeBg2');
            }
        );

        // PRODUCT presentation
        $('#pep-prod-1').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep1').addClass('visible-pep1');
                $('#pep-prod-1').addClass('fullpepsi-1');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep1').removeClass('visible-pep1');
                $('#pep-prod-1').removeClass('fullpepsi-1');
            }
        );        

        $('#pep-prod-2').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep2').addClass('visible-pep2');
                $('#pep-prod-2').addClass('fullpepsi-2');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep2').removeClass('visible-pep2');
                $('#pep-prod-2').removeClass('fullpepsi-2');
            }
        );        

        $('#pep-prod-3').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep3').addClass('visible-pep3');
                $('#pep-prod-3').addClass('fullpepsi-3');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep3').removeClass('visible-pep3');
                $('#pep-prod-3').removeClass('fullpepsi-3');
            }
        );    

        $('#pep-prod-4').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep4').addClass('visible-pep4');
                $('#pep-prod-4').addClass('fullpepsi-4');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep4').removeClass('visible-pep4');
                $('#pep-prod-4').removeClass('fullpepsi-4');
            }
        );        

        $('#pep-prod-5').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep5').addClass('visible-pep5');
                $('#pep-prod-5').addClass('fullpepsi-5');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep5').removeClass('visible-pep5');
                $('#pep-prod-5').removeClass('fullpepsi-5');
            }
        );        

        $('#pep-prod-6').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep6').addClass('visible-pep6');
                $('#pep-prod-6').addClass('fullpepsi-6');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep6').removeClass('visible-pep6');
                $('#pep-prod-6').removeClass('fullpepsi-6');
            }
        );        

        $('#pep-prod-7').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep7').addClass('visible-pep7');
                $('#pep-prod-7').addClass('fullpepsi-7');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep7').removeClass('visible-pep7');
                $('#pep-prod-7').removeClass('fullpepsi-7');
            }
        );     

        $('#pep-prod-8').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep8').addClass('visible-pep8');
                $('#pep-prod-8').addClass('fullpepsi-8');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep8').removeClass('visible-pep8');
                $('#pep-prod-8').removeClass('fullpepsi-8');
            }
        );        

        $('#pep-prod-9').hover(
            function() {
                $('#background-video').addClass('hidden');
                $('#background-image-pep9').addClass('visible-pep9');
                $('#pep-prod-9').addClass('fullpepsi-9');
            },
            function() {
                $('#background-video').removeClass('hidden');
                $('#background-image-pep9').removeClass('visible-pep9');
                $('#pep-prod-9').removeClass('fullpepsi-9');
            }
        );        
        
    });

    // var $header = $('#header');
    // var headerOffsetTop = $header.offset().top;

    // $(window).on('scroll', function() {
    //     var scrollTop = $(this).scrollTop();

    //     if (scrollTop > headerOffsetTop + 50) {
    //         $header.addClass('collapsed');
    //     } else {
    //         $header.removeClass('collapsed');
    //     }
    // });

});