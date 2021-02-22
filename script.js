const jsGallery = document.querySelector(".js-gallery")
const jsGalleryItems = document.querySelectorAll(".js-gallery-item")
let slideCount = jsGalleryItems.length
let slideWidth = 1000
// let intervalId = window.setInterval(transitionSlide, 5000)

//use this for each button to change it, look at gom for click event listener and button
let currentSlide = 1;

function transitionSlide(){
if(currentSlide < slideCount){
  let delta = currentSlide*slideWidth*-1
jsGallery.style.transform = `translateX(${delta}px)`
currentSlide++
// console.log(currentSlide)
}
else{
  // console.log(currentSlide)
  jsGallery.style.transform = "translateX(0)"
  currentSlide = 1
}
}