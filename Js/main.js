let BarsBtn = document.querySelector(".header .bars");
let navBar1 = document.querySelector(".header .container .nav1")
let navBar2 = document.querySelector(".header .container .nav2")

BarsBtn.onclick = function () {
    navBar1.classList.toggle("active");
    navBar2.classList.toggle("active");
}

// Change landing Background 

function imgsShuffle() {
    let Imgs = document.querySelector(" .landing .images img:last-child");
    Imgs.classList.toggle("active")
}

// Change landing Background 

// Gallery Slider 

let innerSlider = document.querySelector(".inner-slider");
let ImgSlider = document.querySelector(".inner-slider .image");

function next() {
    innerSlider.append(innerSlider.children[0]);
}

function prev() {
    innerSlider.prepend(innerSlider.children[5]);
}

// Gallery Slider

// Scroll To top Button

let Top = document.querySelector(" body .top");
let Bullets = document.querySelector(".bullets")
let BulletsSpan = document.querySelectorAll(".bullets span")

window.onscroll = function () {
    if (this.scrollY >= 900) {
        Top.classList.add("show");
        Bullets.classList.add("show");
    } else {
        Top.classList.remove("show");
        Bullets.classList.remove("show");
    }
}

function ScrollTop() {
    window.scrollTo({
        behavior: 'smooth' ,
        top: 0,
    });
}


// Bullets Function

BulletsSpan.forEach(bullet  => {
    bullet.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })
})