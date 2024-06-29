const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});



var swiper = new Swiper(".men .mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
document
    .querySelector(".clothing-container")
    .addEventListener("wheel", (evt) => {
        evt.preventDefault();
        document.querySelector(".clothing-container").scrollLeft += evt.deltaY;
    });
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let carousel = document.querySelector(".carousel");
let items = carousel.querySelectorAll(".list .item");
let indicator = carousel.querySelector(".indicators");
let dots = indicator.querySelectorAll(".indicators ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

const startAutoPlay = () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
};
startAutoPlay();

const setSlider = () => {
    let itemActiveOld = carousel.querySelector(".list .item.active");
    if (itemActiveOld) itemActiveOld.classList.remove("active");
    items[active].classList.add("active");

    let dotActiveOld = indicator.querySelector(".indicators ul li.active");
    if (dotActiveOld) dotActiveOld.classList.remove("active");
    dots[active].classList.add("active");

    indicator.querySelector(".number").innerText = "0" + (active + 1);
    startAutoPlay();
};
setSlider();

nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    carousel.style.setProperty("--calculation", 1);
    setSlider();
};
prev.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    carousel.style.setProperty("--calculation", -1);
    setSlider();
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
};
dots.forEach((item, position) => {
    item.onclick = () => {
        active = position;
        setSlider();
    };
});

var swiper = new Swiper("#swpi", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
