//let firstCard = getRandomCard ()
//let secondCard = getRandomCard ()
let player = {
    name: "Anshita", 
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el")

//store sum of card in a variable 
//let sumEl= document.getEelmentById("sum-el")
let sumEl = document.querySelector ("#sum-el")
let cardsEl = document.querySelector("#cards-el")
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
let playerEl =document.getElementById ("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard () {
    let randomCard = Math.floor ( Math.random () * 13) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10 ) {
        return 10
    }
    else {
        return randomCard
    }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame ()
}

function renderGame () {
    //cardsEl.textContent = "Cards : " + firstCard + " " + secondCard 
    cardsEl.textContent = "Cards : " 
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card ? " 
} 
    else if (sum === 21) {
        message = "You've got Blackjack !"
        hasBlackJack = true
} 
    else {
        message = "You're out of the game !"
        isAlive = false
}
    messageEl.textContent = message
    
}

function newCard () {
    if (isAlive == true && hasBlackJack == false ) {
    console.log("Drawing a new card from the deck !")
    let card = getRandomCard ()
    cards.push(card)
    sum = sum + card 
    renderGame ()
}
}


//let messageEl = document.getElementById("message-el")
   //console.log(messageEl)