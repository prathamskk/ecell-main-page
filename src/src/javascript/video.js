// const desktopUrl = "./src/assets/video/homevideo.mp4";
const desktopUrl = new URL("../assets/video/homevideo.mp4", import.meta.url);
const mobileUrl =  new URL("../assets/video/Main_Page_Phone.mp4", import.meta.url);
window.addEventListener("DOMContentLoaded", () => {
  let video = document.querySelector("#hero-video");

  let source = document.createElement("source");
  source.type = "video/mp4";
  if (window.innerWidth > 900) {
    source.src = desktopUrl;
  }
  if (window.innerWidth < 900) {
    source.src = mobileUrl;
  }
  video.appendChild(source);
});
