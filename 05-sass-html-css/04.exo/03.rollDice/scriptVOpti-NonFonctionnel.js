// SELECTOR
// boutons control
let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');
// score
let finalScore = document.getElementsByClassName('finalScore');
let currentScore = document.getElementsByClassName('currentScore');
// player text
let player1Name = document.querySelector('#player1 h2');
let player2Name = document.querySelector('#player2 h2');
// main et body
let main = document.querySelector('main');
let body = document.querySelector('body');
// ajout des points
let point1 = document.getElementById('player1Up');
let point2 = document.getElementById('player2Up');
let pointID = "";
let point = document.createElement('ion-icon');
point.setAttribute('name','radio-button-on-outline');
point.setAttribute('class','setPlayer');

// VARIABLE
// a utiliser plus tard 
let randomNumber = 0;
let randomPlayer = null;

let currentScore1 = 0;
let currentScore2 = 0;

let finalScore1 = 0;
let finalScore2 = 0;

const imgDice = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];
let diceIMG = document.createElement('img');
let diceNumber = 0; 

// FUNCTION
// Afficher les dés par rapport a un nombre aléatoire 
function dice(){
    randomNumber = Math.floor(Math.random() * 6); 
    diceNumber = imgDice[randomNumber]; 
    diceIMG.src = "img/"+ diceNumber +".png"; 
    newGame.insertAdjacentElement('afterend',diceIMG) 
}

// Supprimer l'image du dé
function changeDice (){
    if (newGame.nextElementSibling == diceIMG){
        diceIMG.remove();
        console.log(diceIMG)
    }
}

// Quand un score à dépassé 100 (condition de victoire)
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

// Change qui à la main et peu jouer
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

// Change les scores
function holdClick (finalScoreIndex,currentScoreIndex,index){
    finalScoreIndex = finalScoreIndex + currentScoreIndex;
    currentScoreIndex = 0;
    currentScore.item(index).textContent = currentScoreIndex;
    finalScore.item(index).textContent = finalScoreIndex;
    changePlayer();
    changeDice();
    win();
}

// Si le joueur tombe sur 1
function fail (gradient,currentScoreIndex,index){
    changePlayer();
    body.style.background = gradient;
    currentScoreIndex = 0;
    currentScore.item(index).textContent = currentScoreIndex;
}

// Ajouter et afficher le current

// Ne marche pas a voir pourquoi

// function addNumber (currentScoreIndex,index){
//     currentScoreIndex = currentScoreIndex + randomNumber +1;
//     currentScore.item(index).textContent = currentScoreIndex;

//     console.log(randomNumber);
//     console.log(currentScoreIndex);
// }


// BONUS : Change le background
function changeBG (){
    if (randomPlayer === 0){
        body.style.background = 'linear-gradient(90deg, rgba(231,230,120,1) 0%, rgba(65,52,53,1) 100%)';
    } else if (randomPlayer === 1){
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgba(231,230,120,1) 100%)';
    }
}


////////////////////////////////
// CLIQUE

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

})


/////////////////////////////////
// Clique sur Roll Dice
rollDice.addEventListener('click', function(){


    if ((randomPlayer === 0 || randomPlayer === 1) && (finalScore1<100 && finalScore2<100)){
        randomNumber = Math.floor(Math.random() * 6);
        changeDice();
        dice();
        changeBG();

        if (randomNumber === 0 && randomPlayer === 0){
            randomPlayer ++
            fail ('linear-gradient(90deg, rgb(231, 120, 120) 0%, rgba(65,52,53,1) 100%)',currentScore1,0);
        } else if (randomNumber === 0 && randomPlayer === 1){
            randomPlayer --
            fail ('linear-gradient(90deg, rgba(65,52,53,1) 0%, rgb(231, 120, 120) 100%)',currentScore2,1);
        }
        
    } else if (player1Name.textContent == 'WINNER' || player2Name.textContent == 'WINNER') {
        alert('Clique sur NEW GAME')
    } else {
        alert('non non non')
    }
    //////////////////
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

        //probleme avec la porter
        if (currentScore1>0){
            randomPlayer++
            holdClick(finalScore1,currentScore1,0);
            currentScore1 = 0;
    
        } else if (currentScore2>0){
            randomPlayer--
            holdClick(finalScore2,currentScore2,1);
            currentScore2 = 0;
        }
    }
})








