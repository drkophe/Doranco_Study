//selecteur

let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');


let finalScore = document.getElementsByClassName('finalScore');
let currentScore = document.getElementsByClassName('currentScore');


let player1Name = document.querySelector('#player1 h2');
let player2Name = document.querySelector('#player2 h2');

let main = document.querySelector('main');
let body = document.querySelector('body');

let point1 = document.getElementById('player1Up');
let point2 = document.getElementById('player2Up');

let pointID = "";

let point = document.createElement('ion-icon');
point.setAttribute('name','radio-button-on-outline');
point.setAttribute('class','setPlayer');

let randomNumber = 0;
let randomPlayer = null;

let currentScore1 = 0;
let currentScore2 = 0;

let finalScore1 = 0;
let finalScore2 = 0;

//////////////////////////
// Fait correspondre les images et l'aléatoire

const imgDice = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6']; // tableau (index de 0 à 5)

let diceIMG = document.createElement('img'); // variable qui créer un élement image
let diceNumber = 0; // variable qu'on va utilisé pour selectionné un index du tableau


function dice(){
    randomNumber = Math.floor(Math.random() * 6); // genere un nombre entre 0 et 5
    diceNumber = imgDice[randomNumber]; // la variable se base sur le tableau 'diceIMG' et prend la valeur de l'index (generer juste avant aléatoirement) 
    diceIMG.src = "img/"+ diceNumber +".png"; // le chemin de l'élement img créer devient (le chemin + diceNumber + le format)
    newGame.insertAdjacentElement('afterend',diceIMG) //inséré l'élément image après la div New Game
}

/////////////////////////

function changeDice (){
    if (newGame.nextElementSibling == diceIMG){
        diceIMG.remove();
        console.log(diceIMG)
    }
}

function win (){
    if (finalScore1 >= 100){
        player1Name.textContent = 'WINNER'
        point.remove();
        body.style.background = 'linear-gradient(90deg, rgb(120, 231, 125) 0%, rgba(65,52,53,1) 100%)';
    } else if (finalScore2 >= 100){
        player2Name.textContent = 'WINNER'
        point.remove();
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgb(120, 231, 125) 100%)';
    }
}

function changePlayer (){
    if (randomPlayer === 0) {

        main.style.background = 'linear-gradient(90deg, rgba(208,207,208,1) 0%, rgba(208,207,208,1) 50%, rgba(255,254,255,1) 50%, rgba(255,254,255,1) 100%)';
        body.style.background = 'linear-gradient(90deg, rgba(231,230,120,1) 0%, rgba(65,52,53,1) 100%)';
        point1.append(point);
        pointID = 'setPlayer1';
        point.setAttribute('id', pointID);
    } else {

        main.style.background = 'linear-gradient(90deg, rgba(255,254,255,1) 0%, rgba(255,254,255,1) 50%, rgba(208,207,208,1) 50%, rgba(208,207,208,1) 100%)';
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgba(231,230,120,1) 100%)';
        point2.append(point);
        pointID = 'setPlayer2';
        point.setAttribute('id', pointID);
    }
}

function changeBG (){
    if (randomPlayer === 0){
        body.style.background = 'linear-gradient(90deg, rgba(231,230,120,1) 0%, rgba(65,52,53,1) 100%)';
    } else if (randomPlayer === 1){
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgba(231,230,120,1) 100%)';
    }
}



// Clique :


/////////////////////////////////
// Clique sur New Game
newGame.addEventListener('click',function(){
    randomPlayer = Math.floor(Math.random() * 2)
    changePlayer();
    changeDice ();

    randomNumber = 0;

    currentScore1 = 0;
    currentScore.item(0).textContent = currentScore1;
    currentScore2 = 0;
    currentScore.item(1).textContent = currentScore2;

    finalScore1 = 0;
    finalScore.item(0).textContent = finalScore1;
    finalScore2 = 0;
    finalScore.item(1).textContent = finalScore2;

    player1Name.textContent = 'Player 1'
    player2Name.textContent = 'Player 2'

})


/////////////////////////////////
// Clique sur Roll Dice
rollDice.addEventListener('click', function(){


    if ((randomPlayer === 0 || randomPlayer === 1) && (finalScore1<100 && finalScore2<100)){
        randomNumber = Math.floor(Math.random() * 6);
        changeDice();
        dice();
        console.log(randomNumber);

        changeBG();

        if (randomNumber === 0 && randomPlayer === 0){
            randomPlayer ++
            changePlayer();

            body.style.background ='linear-gradient(90deg, rgb(231, 120, 120) 0%, rgba(65,52,53,1) 100%)';

            currentScore1 = 0;

            currentScore.item(0).textContent = currentScore1;


        } else if (randomNumber === 0 && randomPlayer === 1){
            randomPlayer --
            changePlayer();

            body.style.background ='linear-gradient(90deg, rgba(65,52,53,1) 0%, rgb(231, 120, 120) 100%)';

            currentScore2 = 0;

            currentScore.item(1).textContent = currentScore2;
        }
        
    } else if (player1Name.textContent == 'WINNER' || player2Name.textContent == 'WINNER') {
        alert('Clique sur NEW GAME')
    } else {
        alert('non non non')
    }

    console.log(currentScore.item(0).textContent)

    if (randomPlayer === 0 && randomNumber>0) {
        currentScore1 = currentScore1 + randomNumber +1;
        currentScore.item(0).textContent = currentScore1;
    } else if (randomPlayer === 1 && randomNumber>0) {
        currentScore2 = currentScore2 + randomNumber +1;
        currentScore.item(1).textContent = currentScore2;
    }
})


/////////////////////////////////
//Clique sur Hold
hold.addEventListener('click', function(){
    if (player1Name.textContent == 'WINNER' || player2Name.textContent == 'WINNER') {
        alert('Clique sur NEW GAME')
    } else {
        if (currentScore1>0){
            finalScore1 = finalScore1 + currentScore1;
            currentScore1 = 0;
            currentScore.item(0).textContent = currentScore1;
            finalScore.item(0).textContent = finalScore1;
    
            randomPlayer ++
            changePlayer();
            changeDice();
            win();
    
        } else if (currentScore2>0){
            finalScore2 = finalScore2 + currentScore2;
            currentScore2 = 0;
            currentScore.item(1).textContent = currentScore2;
            finalScore.item(1).textContent = finalScore2;
    
            randomPlayer --
            changePlayer();
            changeDice();
            win();
        }
    }
})






