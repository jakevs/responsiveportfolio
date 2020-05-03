const movingPic = document.querySelector(".card-img-top");

movingPic.addEventListener("click", (e) => {
  e.preventDefault();
  mediumZoom(".card-img-top");
});
