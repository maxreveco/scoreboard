//Variables to be used

//DOM variables
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

//Counter variables
let homePointCounter = 0
let guestPointCounter = 0

// Home point buttons functions

function add1PointsHome() {
    homePointCounter += 1
    homeScore.textContent = homePointCounter
}

function add2PointsHome() {
    homePointCounter += 2
    homeScore.textContent = homePointCounter
}

function add3PointsHome() {
    homePointCounter += 3
    homeScore.textContent = homePointCounter
}

// Guest point buttons functions

function add1PointsGuest() {
    guestPointCounter += 1
    guestScore.textContent = guestPointCounter
}

function add2PointsGuest() {
    guestPointCounter += 2
    guestScore.textContent = guestPointCounter
}

function add3PointsGuest() {
    guestPointCounter += 3
    guestScore.textContent = guestPointCounter
}

//Reset scores function

function resetScores() {
    homePointCounter = 0
    guestPointCounter = 0
    
    homeScore.textContent = homePointCounter
    guestScore.textContent = homePointCounter
    
}