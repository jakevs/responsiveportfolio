const movingPic = document.querySelector("#picture-size");

movingPic.addEventListener("click", (e) => {
  e.preventDefault();
  mediumZoom("#picture-size");
});

// var slideimages = new Array() // create new array to preload images
// slideimages[0] = new Image() // create new instance of image object
// slideimages[0].src = "../Images" // set image src property to image path, preloading image in the process
// slideimages[1] = new Image()
// slideimages[1].src = "secondcar.gif"
// slideimages[2] = new Image()
// slideimages[2].src = "thirdcar.gif"
