let hamburger = document.querySelector(".hamburger"); //Создааём переменую в которую попадает кнопка гамбургер
let navLinks = document.querySelector(".nav__links"); //Создаём переменную в которую попадает навлинкс

let aboutUs = document.querySelector("#aboutUs");
let Transfer = document.querySelector("#transfer");
let Turs = document.querySelector("#turs");
let Reserve = document.querySelector("#reserve");



let navAAll = document.querySelectorAll("nav a");//Состовная переменная в которую попали все ссылки из нава
console.log(navAAll)
hamburger.onclick = function () { //При нажатии на гамбургер запускается функция
    hamburger.classList.toggle("hamburger_active"); //Переключаем гамбургеру класс
    navLinks.classList.toggle("nav__links_active"); //Переключаем навлинксу класс
}

for(let i=0;i<5;i++){//цикл (переменная для цикла;сколько будет рабоать цикл;на сколько будет увеличивотся переменная за один цикл)
    navAAll[i].onclick = function (){
        navLinks.classList.remove("nav__links_active");
        hamburger.classList.remove("hamburger_active");
    }
}



const reviewsSwiper = new Swiper('.reviews__slider', {
    speed: 2000,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



const transferSwiper = new Swiper('.transfer__slider', {
    speed: 2000,
    // autoplay: {
    //     delay: 2000,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.22,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1 - 6.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.17,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2.8,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4.17,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 7.17,
            spaceBetween: 20
        },
    }
})



const tursSwiper = new Swiper('.turs__slider', {
    speed: 2000,
    // autoplay: {
    //     delay: 2000,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 20,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.17,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.17,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3.17,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4.17,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 6.17,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 10.17,
            spaceBetween: 20
        },
    }
});