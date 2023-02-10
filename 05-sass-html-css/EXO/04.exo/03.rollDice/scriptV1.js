// selecteur control

let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');

console.log(newGame);
console.log(rollDice);
console.log(hold);

//selecteur score

//HTML Collection a voir si pas mieux d'ajouter un ID plutot

let finalScore = document.getElementsByClassName('finalScore');
let currentScore = document.getElementsByClassName('currentScore');

console.log(finalScore);
console.log(currentScore);

let player1Name = document.querySelector('#player1 h2');
let player2Name = document.querySelector('#player2 h2');

let main = document.querySelector('main');
let body = document.querySelector('body');

console.log(player1Name);
console.log(player2Name);


// selecteur plyer pour le point

let point1 = document.getElementById('player1Up');
let point2 = document.getElementById('player2Up');

console.log(point1);
console.log(point2);

// let setPoint1 = document.createElement('ion-icon');
// setPoint1.setAttribute('name','radio-button-on-outline');
// setPoint1.setAttribute('id','setPlayer1');

// let setPoint2 = document.createElement('ion-icon');
// setPoint2.setAttribute('name','radio-button-on-outline');
// setPoint2.setAttribute('id','setPlayer2');

let pointID = "";

let point = document.createElement('ion-icon');
point.setAttribute('name','radio-button-on-outline');
point.setAttribute('class','setPlayer');

let dice1 = document.createElement('img');
dice1.src = "img/dice-1.png";

let dice2 = document.createElement('img');
dice2.src = "img/dice-2.png";

let dice3 = document.createElement('img');
dice3.src = "img/dice-3.png";

let dice4 = document.createElement('img');
dice4.src = "img/dice-4.png";

let dice5 = document.createElement('img');
dice5.src = "img/dice-5.png";

let dice6 = document.createElement('img');
dice6.src = "img/dice-6.png";

function changePlayer (){
    if (randomPlayer === 0) {

        main.style.background = 'linear-gradient(90deg, rgba(208,207,208,1) 0%, rgba(208,207,208,1) 50%, rgba(255,254,255,1) 50%, rgba(255,254,255,1) 100%)';
        body.style.background = 'linear-gradient(90deg, rgba(231,230,120,1) 0%, rgba(65,52,53,1) 100%)';
        point1.append(point);
        pointID = 'setPlayer1';
        point.setAttribute('id', pointID);

        console.log(point);
    } else {

        main.style.background = 'linear-gradient(90deg, rgba(255,254,255,1) 0%, rgba(255,254,255,1) 50%, rgba(208,207,208,1) 50%, rgba(208,207,208,1) 100%)';
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgba(231,230,120,1) 100%)';
        point2.append(point);
        pointID = 'setPlayer2';
        point.setAttribute('id', pointID);

        console.log(point);
    }
}


// compteur au hasard qui va commencer
let randomNumber = 0;
let randomPlayer = null;

let currentScore1 = 0;
let currentScore2 = 0;

let finalScore1 = 0;
let finalScore2 = 0;


newGame.addEventListener('click',function(){
    randomPlayer = Math.floor(Math.random() * 2)
    changePlayer();
    changeDice ()

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

function changeBG (){
    if (randomPlayer === 0){
        body.style.background = 'linear-gradient(90deg, rgba(231,230,120,1) 0%, rgba(65,52,53,1) 100%)';
    } else if (randomPlayer === 1){
        body.style.background = 'linear-gradient(90deg, rgba(65,52,53,1) 0%, rgba(231,230,120,1) 100%)';
    }
}


rollDice.addEventListener('click', function(){

    dice20();

    if ((randomPlayer === 0 || randomPlayer === 1) && (finalScore1<100 && finalScore2<100)){
        randomNumber = Math.floor(Math.random() * 6)+1;
        changeDice();
        dice ();
        console.log(randomNumber);

        changeBG();

        if (randomNumber === 1 && randomPlayer === 0){
            randomPlayer ++
            changePlayer();

            body.style.background ='linear-gradient(90deg, rgb(231, 120, 120) 0%, rgba(65,52,53,1) 100%)';

            currentScore1 = 0;

            currentScore.item(0).textContent = currentScore1;


        } else if (randomNumber === 1 && randomPlayer === 1){
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

    if (randomPlayer === 0 && randomNumber>1) {
        currentScore1 = currentScore1 + randomNumber;
        currentScore.item(0).textContent = currentScore1;
    } else if (randomPlayer === 1 && randomNumber>1) {
        currentScore2 = currentScore2 + randomNumber;
        currentScore.item(1).textContent = currentScore2;
    }
})

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

// dice1.remove();
// dice2.remove();
// dice3.remove();
// dice4.remove();
// dice5.remove();
// dice6.remove();

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

function changeDice (){
    if (newGame.nextElementSibling == dice1){
        dice1.style.opacity =
        dice1.remove();
        console.log(dice1)
    } else if (newGame.nextElementSibling == dice2) {
        dice2.remove();
        console.log(dice2)
    } else if (newGame.nextElementSibling == dice3) {
        dice3.remove();
        console.log(dice3)
    } else if (newGame.nextElementSibling == dice4) {
        dice4.remove();
        console.log(dice4)
    } else if (newGame.nextElementSibling == dice5) {
        dice5.remove();
        console.log(dice5)
    } else if (newGame.nextElementSibling == dice6) {
        dice6.remove();
        console.log(dice6)
    } // else if (newGame.nextElementSibling == document.getElementById('controlDown')){
    //     dice();
    // }
}

function dice (){
    randomNumber = Math.floor(Math.random() * 6)+1;
    if (randomNumber === 1) {
        newGame.insertAdjacentElement('afterend',dice1);
    } else if (randomNumber === 2){
        newGame.insertAdjacentElement('afterend',dice2);
    }else if (randomNumber === 3){
        newGame.insertAdjacentElement('afterend',dice3);
    }else if (randomNumber === 4){
        newGame.insertAdjacentElement('afterend',dice4);
    }else if (randomNumber === 5){
        newGame.insertAdjacentElement('afterend',dice5);
    }else if (randomNumber === 6){
        newGame.insertAdjacentElement('afterend',dice6);
    }
}

//////////////////////////

// const imgDice = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];

// let diceIMG = document.createElement('img');
// let diceNumber = 0;



// function dice20(){
//     randomNumber = Math.floor(Math.random() * 6);
//     diceNumber = imgDice[randomNumber];
//     diceIMG.src = "img/"+ diceNumber +".png";
//     newGame.insertAdjacentElement('afterend',diceIMG)

//     console.log(diceNumber)
//     console.log(diceIMG)
// }

///////
