const container = document.querySelector(".video-tag__container");

const leftArrow = document.querySelector(".video-tag__arrow--left");

const rightArrow = document.querySelector(".video-tag__arrow--right");

leftArrow.addEventListener("click", () => {
  container.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});