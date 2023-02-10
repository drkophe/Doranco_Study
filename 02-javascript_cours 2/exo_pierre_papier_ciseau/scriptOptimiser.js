const playerChoiceDisplay = document.querySelector('#player > span');
const computerChoiceDisplay = document.querySelector('#computer > span');
const resultDisplay = document.getElementById('output');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');


var computer = null;
var player = null;
var p_score = 0;
var c_score = 0;

const choices = ['paper', 'rock', 'scissors'];

choices.forEach(function(element){
    document.getElementById(element).addEventListener('click', function(event){
         // event: objet géant
        player = event.target.id;
        computer = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.textContent = computer;
        playerChoiceDisplay.textContent = player;
        if(player === computer){
            resultDisplay.textContent = 'draw';
        }else if((player === 'paper' && computer === 'scissors') || (player === 'rock' && computer === 'paper') || (player === 'scissors' && computer === 'rock')){ // le joueur a perdue
            resultDisplay.textContent = 'You lose!';
            resultDisplay.style.color = 'red';
            c_score ++;
            computerScore.textContent = c_score;
        }else{
            resultDisplay.textContent = 'You win!';
            resultDisplay.style.color = 'green';
            p_score ++;
            computerScore.textContent = p_score;
        }
    })
})


//////////////////////////////////////////////////////////////////////////
const clickName = ['click1', 'click2', 'click3', 'click4'];
clickName.forEach(function(element){
    console.log(element);
    document.getElementById(element).addEventListener('click', function (event){
        console.log(event.target.id)
        console.log(event.target)
        if (event.target.style.backgroundColor = 'blue'){
            event.target.style.backgroundColor = 'red';
        }else {
            event.target.style.backgroundColor = 'blue';
        }
        
        // if (event.target == 'blue'){
        //     event.target.style.background = 'red';
        // }else {
        //     event.target.style.background = 'blue';
        // }
    });
})