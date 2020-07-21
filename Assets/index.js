var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

// const movingPic = document.querySelector("#picture-size");

// movingPic.addEventListener("click", (e) => {
//   e.preventDefault();
//   mediumZoom("#picture-size");
// });

// var slideimages = new Array() // create new array to preload images
// slideimages[0] = new Image() // create new instance of image object
// slideimages[0].src = "../Images" // set image src property to image path, preloading image in the process
// slideimages[1] = new Image()
// slideimages[1].src = "secondcar.gif"
// slideimages[2] = new Image()
// slideimages[2].src = "thirdcar.gif"
