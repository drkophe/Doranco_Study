// ----------- VERSION GPT -----------------


const choices = ['pierre', 'feuille', 'ciseaux'];
let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector('#player span');
const computerChoice = document.querySelector('#computer span');
const output = document.querySelector('#output');
const playerScoreDisp = document.querySelector('#player-score');
const computerScoreDisp = document.querySelector('#computer-score');

const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');

paper.addEventListener('click', () => play('feuille'));
rock.addEventListener('click', () => play('pierre'));
scissors.addEventListener('click', () => play('ciseaux'));

function play(userChoice) {
    // générer un choix aléatoire pour l'ordinateur
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playerChoice.textContent = userChoice;
    computerChoice.textContent = computerChoice;

    // déterminer le résultat
    if (userChoice === computerChoice) {
        output.textContent = 'Egalité !';
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (userChoice === 'feuille' && computerChoice === 'pierre') ||
        (userChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        output.textContent = 'Vous avez gagné !';
        playerScore++;
        playerScoreDisp.textContent = playerScore;
    } else {
        output.textContent = 'Vous avez perdu !';
        computerScore++;
        computerScoreDisp.textContent = computerScore;
    }
}








// ----------------------------------------------------------------------------------------------------

// --------------------------------   DEFINIR EGALITE --------------------------------------

if (playerChoice === random)

// si le choix du joueur est le même que celui de l'ordinateur
//          alors :
{gameOn.innerText = 'Egalité !';} 
//ecrire :    égalité  !


// ----------------------------------- DEFINIR GAGNER ---------------------------------------------------

// sinon si :
else if

(playerChoice === 'rock' && random === 'scissors') ||

// si le choix du joueur est pierre 
//             et
// que le choix de l'ordi est ciseau

//           ou que

(playerChoice === 'paper' && random === 'rock') || 

// si le choix du joueur est papier 
//             et
// que le choix de l'ordi est pierre

//           ou que

(playerChoice === 'scissors' && random === 'paper')

// si le choix du joueur est ciseau 
//             et
// que le choix de l'ordi est papier


// si une de ces 3 conditions est rempli alors : 
{gameOn.innerText = 'Vous avez gagné !';} 
// ecrire :        gagné  ! 


// ----- DEFINIR PERDU (par défault comme il ne reste plus que les possiblité qui même à cette conclusion ) ---------

//sinon
else {gameOn.innerText = 'Vous avez perdu !';}
//ecrire vous avez perdu

// ------------------------------------------------------------------------------------------------------