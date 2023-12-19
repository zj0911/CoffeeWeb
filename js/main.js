
let toggleBtn = document.querySelector('.toggle-btn i'),
    menuBar = document.querySelector('#menu'),
    topBtn = document.querySelector('#top');

// toggleBtn.addEventListener('click', () => {
//     menuBar.classList.toggle('active');
//     toggleBtn.classList.toggle('fa-times');
// });

window.addEventListener('scroll', () => {
    this.scrollY >= 500 ? topBtn.classList.add('show') : topBtn.classList.remove('show');
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*Testimonial Slider With Bullet Points */
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },

        // when window width is >= 992px
        992: {
            slidesPerView: 3,
        }
    },
    //autoplay the slider with a delay of 2.5s
    autoplay: {
        delay: 2500,
        disableInteraction: false,
    },
    //show the pagination bulllet and make it clickable
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    //loop the slider 
    lazyLoading: true,
    loop: true,

});


