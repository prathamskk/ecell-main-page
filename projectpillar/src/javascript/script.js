let toggle = document.getElementById("toggle");
let link = document.getElementById("nav-links");
let nav = document.getElementById("nav-header");

function nav_toggle() {
  toggle.classList.toggle("toggle-active");

  if (link.className === "nav-links-disable") {
    link.classList.remove("nav-links-disable");
    link.classList.add("nav-links-active");
  } else {
    link.classList.remove("nav-links-active");
    link.classList.add("nav-links-disable");
  }
}
toggle.onclick = nav_toggle;

document.onclick = function (e) {
  if (
    e.target.id !== "nav-header" &&
    e.target.id !== "nav-links" &&
    e.target.id !== "toggle" &&
    e.target.id !== "toggle-span"
  ) {
    toggle.classList.remove("toggle-active");
    link.classList.remove("nav-links-active");
    link.classList.add("nav-links-disable");
  }
};

window.addEventListener("scroll", () => {
  let exist = link.classList.contains("nav-links-active");
  if (
    document.body.scrollTop > 15 ||
    document.documentElement.scrollTop > 15 ||
    exist
  ) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
});

var observer = new IntersectionObserver(
  function (entries) {
    let e = document.getElementById("navbar");

    if (entries[0].isIntersecting === true) {
      e.onmouseover = () => {
        document.getElementById("nav").style.top = "0";
      };
      e.onmouseout = () => {
        let exist = link.classList.contains("nav-links-active");
        if (!exist) {
          document.getElementById("nav").style.top = "-80px";
        }
      };
    } else {
      e.onmouseover = () => {
        document.getElementById("nav").style.top = "0";
      };
      e.onmouseout = () => {
        let exist = link.classList.contains("nav-links-active");
        if (!exist) {
          document.getElementById("nav").style.top = "0px";
        }
      };
    }
  },
  { threshold: [1] }
);

if (window.innerWidth > 1100) {
  observer.observe(document.querySelector("#home"));
}
