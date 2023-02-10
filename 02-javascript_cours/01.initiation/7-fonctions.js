// ------------------------- Les fonctions permettent d'éviter la répetition du code ---------

// DRY: D'ont repeat yourself

console.log('test1!!!!')
console.log('test2!!!!')
console.log('test3!!!!')
console.log('test4!!!!')
console.log('test1!!!!')
console.log('test2!!!!')
console.log('test3!!!!')
console.log('test4!!!!')
console.log('test1!!!!')
console.log('test2!!!!')
console.log('test3!!!!')
console.log('test4!!!!')
console.log('test1!!!!')
console.log('test2!!!!')
console.log('test3!!!!')
console.log('test4!!!!')


// Exemple de fonction
// Phase 1 : création(définition) de la fonction
// test: est le nom de la fonction

function test() { // entete de la fonction
    // Corps de la fonction
    console.log('test1!!!!')
    console.log('test2!!!!')
    console.log('test3!!!!')
    console.log('test4!!!!')
}// la fin de la fonction


// Phase 2 : appeler une fonction (executer la fonction )
test();
test();
test();
test();

// Autre Exemple:
// 1er code
var x = 33;
var resultat = x + 5;
console.log(resultat);
// 2eme code
var y = 40;
var resultat1 = y + 5;
console.log(resultat1);
// 3eme
var z = 12;
var resultat2 = z + 5;
console.log(resultat2);


// solution avec les fonctions
// x : c'est un paramètre
function ajout5(x){
    return x + 5;
}

var resultat1 = ajout5(33); // 33 : argument
var resultat2 = ajout5(40); //40 : argument
var resultat3 = ajout5(12); //12 : argument
var resultat4 = ajout5('test') // test5


// Exo 1 : définissez la fonction multiplication qui accepte deux parametres et retourne la multiplication de deux nombres
// executer la fonction avec différents arguments

// Exo 2 : définissez la fonction concatenation qui accepte deux parametres et retourne la concatenation des deux parametres(qui sont des Strings)
// executer la fonction avec différent arguments

function multiplication(num1, num2){
    return num1 * num2;
}

console.log('multiplication 1 : ', multiplication(9,32));


function concatenation(str1, str2){
    return str1 + str2;
}

console.log('concatenation 1 : ', concatenation('bonjour ' , 'bonsoir'));