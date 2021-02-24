const randomUrl = "https://api.icndb.com/jokes/random/"
let randomJoke = document.querySelector("p")
let randomButton = document.querySelector(".randomButton")
let nextButton = document.querySelector(".nextButton")
let previousButton = document.querySelector(".previousButton")
let oldJokes = []
let counter = 0
let joke = function (data) {
    randomJoke.innerHTML = `${data}`
}
let toggleButton = function () {
    if (counter == 0) {
        previousButton.style.display = "none";
    } else previousButton.style.display = "";
}
toggleButton()
nextButton.addEventListener("click", function (e) {
    e.preventDefault()
    if (counter >= oldJokes.length || counter == 0) {
        fetch(randomUrl)
            .then(response => response.json())
            .then(data => {
                oldJokes.push(data.value.joke)
                joke(data.value.joke)
                counter++
            })
        toggleButton()
    }
    else if (counter < oldJokes.length) {
        randomJoke.innerHTML = oldJokes[counter]
        counter++
    }
})
previousButton.addEventListener("click", function (e) {
    e.preventDefault()
    counter--
    if (counter == 0) {
        previousButton.style.display = "none"
    } else {
        randomJoke.innerHTML = oldJokes[counter - 1]
    }
})
randomButton.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(randomUrl)
        .then(response => response.json())
        .then(data => {
            oldJokes.push(data.value.joke)
            joke(data.value.joke)
            counter++
        })
    toggleButton()
})


