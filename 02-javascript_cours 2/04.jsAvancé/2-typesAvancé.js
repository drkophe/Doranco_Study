// ============================= Types  =============================
// primitifs et objets
// Types primitifs : Number, String, boolean, undefined, null
// Types objets : String, Objet, function, Array

// +++++++++++ ES6 ++++++++++++
let message = 'bonjour tout le monde';
let bool = false;

// Dans Java :
 // String message = 'bonjour je suis anis';
// message = 45; // erreur

// PRIMITIFS VS OBJETS

var x = 5;
var y = x;
console.log(x); // 5
console.log(y); // 5
x = 45;
console.log(x); // 45 
console.log(y); // 5
// Objets 
var obj1 = {pays: 'France'};
var obj2 = obj1;
console.log(obj1); //{pays: 'France'}
console.log(obj2); //{pays: 'France'}
obj2.pays = 'Japon';
console.log(obj1);//{pays: 'Japon'}
console.log(obj2); //{pays: 'Japon'}
