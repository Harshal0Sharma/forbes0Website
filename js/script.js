let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

const bgVideo = document.getElementById("bgVideo");
bgVideo.play().catch(function (error) {
  // Handle any errors here, e.g., video format not supported.
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("scrollingNavbar");
  const scrollPosition = window.scrollY;

  // Adjust the left property based on scroll position
  navbar.style.left = scrollPosition + "px";
});

// ABout video change buttuon
document
  .querySelectorAll(".about .video-about .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-scr");
      document.querySelector(".about .video-about video").src = src;
    };
  });
