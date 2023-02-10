// Les conditions c'est des bouts de codes qui ne s'executent que lorsqu'une condition est vraie 
// if/else : strucutre de controles

// La syntaxe est la suivante : 
// condition : est une expression booleene

if (condition) {
    // faire les instructions écrites ici
} else { // c'est l'inverse de la condition
    // dans le cas où la condition est fausse, faites les instructions écrites ici
}

// ------------- AUTRE EXEMPLE -------------
// on peut imbriquer conditions 
if (condition) {
    // faire les instructions écrites ici si et seulement si la condition est vraie
} else if (condition1) {
    // faire les instructions écrites ici
} else if (condition2) {

} else {

}

// utilisation des opérateurs logiques:
if (condition1 && condition2) {
    // faire les instructions écrites ici si et seulement si 
    // condition1 : true
    // condition2: true
} else { // !condition1 || !condition2
    // faire les instructions écrites ici si et seulement si 
    // // premier cas : condition1 : false et condition2 : true
    // deuxieme cas : condition1 : true et condition2 : false
    // 3eme cas : condition1 : false et condition2 : false
}

// priorité : 
// 1 : ()
// 2: !
// 3 : &&
// 4 : ||

// 7 > 8 : false
//  9 < 6 : false
// 12 > 5 : true
// false && false || true => true
if ((7 > 8) && 9 < 6 || 12 > 5) { // 
    console.log('un');
} else {
    console.log('deux');
};


// ---------------- EXO ---------------
// creer deux variables
// si les deux sont égaux afficher: super
// si les deux ne sont pas égaux afficher : zut

var x = 5;
var y = 78;

if (x == y) { // x === Y
    console.log('Super')
}else{
    console.log('zut')
}

if (x == y) { // x === Y
    console.log('Super')
}else if(x!=y){
    console.log('zut')
}

// donner le code qui permet de faire : 
// afficher 'possibilité d'avoir le permis de conduire ' si la personne est majeur 
// afficher 'impossible d'avoir le permis de conduire' si la personne est mineur

var agePersonne = 20;

if (agePersonne >= 18) {
    console.log('possibilité d\'avoir le permis de conduire');
}else{ // agePersonne < 18
    console.log('impossible d\'avoir le permis de conduire');
}