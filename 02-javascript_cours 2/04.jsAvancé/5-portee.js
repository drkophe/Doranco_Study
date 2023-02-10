// +++++++++++++ ES5 var : var a la portée(Scope) fonction +++++++++++++ 
// un block : commence par { et se termine par une } 
function testDeConduite(test) { 

    if (test == true) {
        var prenom = 'Anis';
        console.log(prenom + ' a passé le test de conduite');
    } else {
        console.log(prenom + " a échoué le test"); 
    }
    console.log('le prénom est : ', prenom); 

}
// console.log(prenom); // Erreur d'execution
testDeConduite(false); // 1 :  // undefined a échoué le test   2 : // le prénom est undefined
testDeConduite(true); //  1 : // anis a passé le test de conduite    2: le prénom est anis




// +++++++++++++ ES6 let, const: ont la portée bloc +++++++++++++

function testDeConduiteES6(test) { // test = false

    if (test == true) {
        // 1er block if
        let prenom = 'Anis';
        const nom = 'rabhi';
        console.log(prenom + ' ' + nom + ' a passé le test de conduite');
    }
    else {
        // 2eme block else
        console.log(prenom + ' ' + nom + " a échoué le test"); 
    }
    console.log('le prénom est : ', prenom); // erreur

}
console.log(prenom); // Erreur
testDeConduite(false); // 33 : // Erreur d'execution , 35  : // Erreur d'execution
testDeConduiteES6(true); // Anis rabhi a passé le test de conduite, 35: // erreur d'execution


// var prenom = 'anis';
// var prenom = 'anis';

// on ne peut pas créer deux variables avec le meme nom en utilisant le mot clé LET
// let prenom = 'anis';
// let prenom = 'anis'; // interdit de faire ça 

// +++++++++++++ ES5 portée dans les boucles +++++++++++++
// ================================ 1ere boucle
var i = 23;  
for (var i = 0; i < 0; i++) {
    console.log(i) 
}
console.log('i : ', i); // i : 0

// ==================================== 2eme boucle
var i = 23;// i = 0
for (var i = 0; i < 5; i++) { 
    console.log(i) // 0 ,1 ,2 ,3 ,4 
}
console.log('i : ', i); // i : 5

// ================================= 3eme boucle
let i = 23; // i = 23 globale
for(let i = 0; i<5; i++){ // let i = 5
    console.log(i) // 0 ,1 ,2 ,4 
}
console.log('i : ', i) // 23

// ================================= if/else

let test = 77;  // test = 77 (portée globale)
if(true){
    let test = 55;// test = 55 (portée du bloc if)
    console.log(test); // 55
}
console.log(test); // 77


