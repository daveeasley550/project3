const randomUrl = "http://api.icndb.com/jokes/random/"
// const url = "http://api.icndb.com/"
let randomJoke = document.querySelector("p")
// console.log(randomJoke)
let randomButton = document.querySelector(".randomButton")
let nextButton = document.querySelector(".nextButton")
let previousButton = document.querySelector(".previousButton")
let oldJokes = []
let counter = 0
let joke = function (data) {
    randomJoke.innerHTML = `${data}`
}
for (let i = 0; i < 40; i++) {

    fetch(randomUrl)
        .then(response => response.json())
        .then(data => {
            oldJokes.push(data.value.joke)
            randomJoke.innerHTML = oldJokes[40]
        })
}
nextButton.addEventListener("click", function (e) {
    e.preventDefault()
    randomJoke.innerHTML = oldJokes[counter += 1]
})
previousButton.addEventListener("click", function (e) {
    e.preventDefault()
    randomJoke.innerHTML = oldJokes[counter -= 1]
})
randomButton.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(randomUrl)
        .then(response => response.json())
        .then(data => joke(data.value.joke))
})
// if()
// console.log(oldJokes)
randomButton.click()





// const jsGallery = document.querySelector(".js-gallery")
// const jsGalleryItems = document.querySelectorAll(".js-gallery-item")



// let slideCount = jsGalleryItems.length
// let slideWidth = 1000
// let intervalId = window.setInterval(transitionSlide, 5000)

//use this for each button to change it, look at gom for click event listener and button
// let currentSlide = 1;

// function transitionSlide(){
// if(currentSlide < slideCount){
//   let delta = currentSlide*slideWidth*-1
// jsGallery.style.transform = `translateX(${delta}px)`
// currentSlide++
// console.log(currentSlide)
// }
// else{
  // console.log(currentSlide)
//   jsGallery.style.transform = "translateX(0)"
//   currentSlide = 1
// }
// }