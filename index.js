//Variables to be used

//DOM variables
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

//Counter variables
let homePointCounter = 0
let guestPointCounter = 0

// Home point buttons functions

function addPointsHome(point) {
    homePointCounter += point
    homeScore.textContent = homePointCounter
}

// Guest point buttons functions

function addPointsGuest(point) {
    guestPointCounter += point
    guestScore.textContent = guestPointCounter
}

//Reset scores function

function resetScores() {
    homePointCounter = 0
    guestPointCounter = 0

    homeScore.textContent = homePointCounter
    guestScore.textContent = homePointCounter

}