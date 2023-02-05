// MENU
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

// HOVER CARD
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 40,
    speed: 500
});

//SLIDER
function next() {
    const widthSlider = document.querySelector(".slider").offsetWidth;
    document.querySelector(".slider-content").scrollLeft += widthSlider;
}

function previous() {
    const widthSlider = document.querySelector(".slider").offsetWidth;
    document.querySelector(".slider-content").scrollLeft -= widthSlider;
}

//HEADER SCROLL EFFECT

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//NAVBAR ACTIVE

const links = document.querySelectorAll('li');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}
