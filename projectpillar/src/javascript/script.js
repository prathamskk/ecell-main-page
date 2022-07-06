function nav_toggle() {
  let toggle = document.getElementById("toggle");
  let link = document.getElementById("nav-links");
  toggle.classList.toggle("toggle-active");

  if (link.className === "nav-links-disable") {
    link.classList.remove("nav-links-disable");
    link.classList.add("nav-links-active");
  } else {
    link.classList.remove("nav-links-active");
    link.classList.add("nav-links-disable");
  }
}

let img = document.querySelectorAll("img");
// console.log(img);
const width = 0;

function wresize() {
  let hero = document.querySelectorAll(".section-wrapper");
  let flexWrapper = document.querySelectorAll(".wrapper-flex");

  let phase_2 = document.getElementById("phase-2");
  let phase_4 = document.getElementById("phase-4");

  if (window.innerWidth < 900) {
    phase_2.setAttribute("data-aos", "fade-right");
    phase_4.setAttribute("data-aos", "fade-right");
  } else {
    phase_2.setAttribute("data-aos", "fade-left");
    phase_4.setAttribute("data-aos", "fade-left");
  }

  for (let i = 0; i < hero.length; i++) {
    const element = hero[i];
    console.log(element);

    if (i == 0) {
      element.style.height = `${window.innerHeight}px`;
    } else if (i == 1) {
      if (window.innerWidth < 900) {
        element.style.height = `${window.outerHeight * 1.05}px`;
      } else element.style.height = `${window.outerHeight / 2}px`;
    } else if (i == 2) {
      if (window.innerWidth < 900) {
        element.style.height = `${window.outerHeight * 1.3}px`;
      } else element.style.height = `${window.outerHeight * 1.15}px`;
    } else element.style.height = `${window.outerHeight}px`;
  }

  for (let j = 0; j < flexWrapper.length; j++) {
    const element = flexWrapper[j];
    element.style.height = `${window.outerHeight / 2}px`;
  }

  // flexWrapper.style.height = `${window.outerHeight / 2}px`;
}

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
}
