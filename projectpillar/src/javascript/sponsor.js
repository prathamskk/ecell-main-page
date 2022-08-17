window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 425) {
    let darea = document.querySelector(".display-area");
    let card = document.querySelectorAll("[data-card]");
    console.log(darea.clientWidth);
    card.forEach((item) => {
      item.style.width = `${darea.clientWidth}px`;
    });
  }
});

let left = document.querySelector("[data-left]");
let right = document.querySelector("[data-right]");

let slideIndex = 0;
let cardIndex = document.querySelectorAll("[data-card]").length;

left.addEventListener("click", () => {
  console.log("left clicked");

  slideIndex = slideIndex - 1;
  prevSlide(slideIndex);

  console.log(slideIndex);
});

right.addEventListener("click", () => {
  console.log("right clicked");
  if (cardIndex - 1 > slideIndex) {
    slideIndex = slideIndex + 1;
    nextSlide(slideIndex);
  } else {
    slideIndex = 0;
    nextSlide(slideIndex);
  }
});

let slider = document.querySelector("[data-slider]");

function nextSlide(slideIndex) {
  let darea = document.querySelector(".display-area");
  let slider = document.querySelector("[data-slider]");
  let slide = -slideIndex * darea.clientWidth + "px";

  slider.style.transform = `translateX(${slide})`;

  console.log(slider);
}

function prevSlide(slideIndex) {
  let darea = document.querySelector(".display-area");
  let slider = document.querySelector("[data-slider]");
  let slide = slideIndex * darea.clientWidth + "px";

  slider.style.transform = `translateX(${slide})`;
}

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("sponsor-card");
//   // let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex - 1].style.display = "block";
//   // dots[slideIndex - 1].className += " active";
// }
// function infiniteLoop() {
//   setTimeout(() => {
//     plusSlides(1);
//     infiniteLoop();
//   }, 5000);
// }

// infiniteLoop();

setInterval(() => {
  console.log(slideIndex, cardIndex - 1);
  if (cardIndex - 1 > slideIndex) {
    slideIndex = slideIndex + 1;
    nextSlide(slideIndex);
  } else {
    slideIndex = 0;
    nextSlide(slideIndex);
  }
}, 5000);
