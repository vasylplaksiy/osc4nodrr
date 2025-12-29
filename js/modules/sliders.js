if(document.querySelector(".reviews--slider:not(.swiper-initialized)")) {
    document.querySelectorAll(".reviews--slider:not(.swiper-initialized)").forEach(function (sliderEl) {
        var reviewsSl = new Swiper(sliderEl, {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
            spaceBetween: 15,
            draggable: true,
            allowTouchMove :true,
            autoplay: false,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                },
                480: {
                    slidesPerView: 2.4,
                    slidesPerGroup: 2,
                    autoplay: false
                },
                768: {
                    slidesPerView: 3.2,
                    slidesPerGroup: 3,
                },
                960: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                }
            },
            navigation: {
                nextEl: ".reviews--slider-next",
                prevEl: ".reviews--slider-prev",
            },

        });
        sliderEl.classList.add("swiper-initialized")
    });
}


if(document.querySelector(".theme-slider:not(.swiper-initialized)")) {
    document.querySelectorAll(".theme-slider:not(.swiper-initialized)").forEach(function (sliderEl) {
        var reviewsSl = new Swiper(sliderEl, {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
            spaceBetween: 15,
            draggable: true,
            allowTouchMove :true,
            autoplay: false,
            loop: false,
            breakpoints: {
                320: {
                    slidesPerView: 1.6,
                    slidesPerGroup: 1,
                },
                480: {
                    slidesPerView: 2.4,
                    slidesPerGroup: 2,
                    autoplay: false
                },
                768: {
                    slidesPerView: 3.2,
                    slidesPerGroup: 3,
                },
                960: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                }
            },
            navigation: {
                nextEl: ".theme-slider-next",
                prevEl: ".theme-slider-prev",
            },
        });

        sliderEl.classList.add("swiper-initialized")
    });
}
