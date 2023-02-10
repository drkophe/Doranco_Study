
const computerTurn = ["paper", "rock", "scissors"];


function randomTurn (){
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
} 
let random = randomTurn();

// test le choix de l'ordinateur
console.log(random);


// selecteur bouton papier pierre ciseau
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');

// selecteur result
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let gameOn = document.getElementById('output');

// selecteur score
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

//----------------------------------------

function gameOnTarget (){
     if (playerChoice === random) {
        console.log('Egalité !');
        gameOn.innerText = 'Egalité !';
        gameOn.style.color = 'black'
    } else if (
        (playerChoice === 'rock' && random === 'scissors') ||
        (playerChoice === 'paper' && random === 'rock') ||
        (playerChoice === 'scissors' && random === 'paper')
    ) {
        console.log('Vous avez gagné !');
        gameOn.innerText = 'Vous avez gagné !';
        gameOn.style.color = 'green'
        playerScore.innerText++;
    } else {
        console.log('Vous avez perdu !');
        gameOn.innerText = 'Vous avez perdu !';
        gameOn.style.color = 'red'
        computerScore.innerText++
    }
}

console.log(player);

//----------------------------------------


// reaction
paper.addEventListener ('click', function () {

    //turn computer
    playerChoice = 'paper';
    random = randomTurn();
    computer.innerText = "Ordinateur : " + random;
    console.log(random);

    // turn player
    player.innerText = "Joueur : " + playerChoice;

    // resultat
    gameOnTarget();
})

rock.addEventListener ('click', function () {

    //turn computer
    playerChoice = 'rock';
    random = randomTurn();
    computer.innerText = "Ordinateur : " + random;
    console.log(random);

    // turn player
    player.innerText = "Joueur : " + playerChoice;

    // resultat
    gameOnTarget();
})

scissors.addEventListener ('click', function () {

    //turn computer
    playerChoice = 'scissors';
    random = randomTurn();
    computer.innerText = "Ordinateur : " + random;
    console.log(random);

    // turn player
    player.innerText = "Joueur : " + playerChoice;

    // resultat
    gameOnTarget();
})




