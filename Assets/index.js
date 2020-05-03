const movingPic = document.querySelector("#picture-size");

movingPic.addEventListener("click", (e) => {
  e.preventDefault();
  mediumZoom("#picture-size");
});
