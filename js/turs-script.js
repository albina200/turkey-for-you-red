const gallerySwiper = new Swiper('.gallery__slider', {
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});