let homePlus1El = document.getElementById("home-plus-1")
let homePlus2El = document.getElementById("home-plus-2")
let homePlus3El = document.getElementById("home-plus-3")

let guestPlus1El = document.getElementById("guest-plus-1")
let guestPlus2El = document.getElementById("guest-plus-2")
let guestPlus3El = document.getElementById("guest-plus-3")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0 

console.log(homePlus1El)

function homeAdd1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestAdd1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}