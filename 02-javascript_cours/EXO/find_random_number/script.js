let randomNumber = Math.floor(Math.random()* 101) +1;
console.log(randomNumber);

let result = document.querySelector('p');

let playerInput = document.querySelector('input');

let play = document.getElementById('play');
let reset = document.getElementById('reset');


let firstNumber = 0;
let lastNumber = 100;

let phrase = document.querySelector('h2');


play.addEventListener('click', function () {
    // console.log(playerInput.value)
    // console.log(typeof playerInput.value)
if(isNaN(playerInput.value) === true || (playerInput.value) < firstNumber || (playerInput.value) > lastNumber) {
        result.textContent = 'Valeur saisie invalide !'
        result.style.color = 'red' 
}else if (playerInput.value == randomNumber){
        result.textContent = "Gagné !"
        result.style.color = 'green' 
    }else {
        result.textContent = "Perdu..."
        result.style.color = 'red' 
        if (playerInput.value < randomNumber){
            firstNumber = playerInput.value;
            phrase.textContent = "Veuillez saisir un nombre entre " + firstNumber + " et " + lastNumber;
        }else if (playerInput.value > randomNumber){
            lastNumber = playerInput.value;
            phrase.textContent = "Veuillez saisir un nombre entre " + firstNumber + " et " + lastNumber;
        }
    };


});

reset.addEventListener('click', function (){
    result.textContent = null;
    playerInput.value = null;
    randomNumber = Math.floor(Math.random()* 101);
    phrase.textContent = "Veuillez saisir un nombre entre 0 et 100";
    firstNumber = 0;
    lastNumber = 100;

    console.log(randomNumber);
});

// console.log(playerInput);
// console.log(result);

