console.log('hello world');


// --------------------------------- VARIABLES --------------------------------
// on a deux mots clés : let et var
// par convention, on utilise let(dans la version ES6)
// on utilise le mot clé var (dans la version ES5)
// ES5 : 2009 - 2015 (le cours de cette semaine)
// ES6/ES7/ES8/ES9 : ecmaScript 2015 : 2015-2023


var x = 5 
console.log(x)

// mini exo : définissez la variable pseudo qui la valeur 'toto' et afficher sa valeur dans la console du navigateur

var pseudo = "toto";
console.log(pseudo)
console.log('pseudo');

var pseudo2 = pseudo;

console.log(pseudo2)

pseudo2 = 'mohamed';
console.log(pseudo2);



// ------------------------ 5 types primitifs(7) : 
// boolean : prend 2 valeurs : true or false
var vrai = true;
var faux = false;

// string : les chaines de caractères

var texte = "ceci est une chaine"
var texte2 = 'ceci est aussi une chaine'
var chaineVide = ""

// les chaines de caractères se mettent entre guillemets , quotes.


// number : c'est tout type de nombre 

var a = 10;
var b = -1245;
var c = 10.2456972;
var d = -52.00;


var t ; //undefined, valeur par défaut si une variable n'a pas de valeur


// ------------------ Le type d'une variable ------------------
// typeof : une propriete prédéfinie dans javascript

var toto = 'toto';
console.log(typeof toto);
console.log(typeof a);
console.log(typeof vrai);


// ========================= Nommer les variables =================
// *****ce qui est interdit*****

// les chiffres
// pas d'espace entre les mots des variables

// tout mot clé reservé : let , const, var , console , 
// var null = 'fdsqf';
// var Number = '..'
// var String = '...' 
// var true = '...'
// var false = '...'
// var if = '...'
// var else = '..'
// var switch = '..'
// var for = '...'
// var while = '....'
// var class = '....';
// var console = '....'

//  - 
// var nom-complet = '....'


// ------------- Convention de nommage(notation) -------------
// ------ CamelCase ------
// premier mot minuscule, 2eme mot commence par une majuscule
var langageProgrammation = 'Javascript';

// ------ SnakeCase ------
// tout les mots sont en minuscules et ils sont séparés par _ : underscore
var langage_programmation = 'Pyton';


// on peut déclarer deux variables avec le meme nom
var test = 'test';
var test = 'test2';

console.log(test); // test2
console.log(test); // test2

// NOTE :
// On a dit que le typage en javascript se fait de manière dynamique.
// ça veut dire qu'on ne déclare pas le type de la variable ,mais c'est dans la phase d'interpretation que JavaScript va le deviner.
var momo = 'momo';
// changement de type et de valeur
momo = 5;

// Interdit de changer le type d'une variable dans un langage statiqument typé comme java
// String momo = 'momo';
// momo = 55;


// ================ Opérateurs arithmétiques ================
// on a 4 opérateurs :
// l'addition + 
// la soustraction avec le - 
// la multiplacation avec le * 
// la division avec le / 
// % : modulo (pour le reste d'une division)

// Il y a un ordre de priorité entre ces opérateurs qui est le suivant : 
// 1. les parenthèses sont toujours les plus prioritaires
// 2. la division 
// 2. la multiplication 
// 3. l'addition 
// 3. la soustraction 


// ++++ EXO 1 ++++
// additionner deux nombres et afficher le résultat dans la console
// en utilisant trois solutions possible 

// 1ere solution
console.log(3 + 5);

// 2eme solution
var a = 5;
var b = 3;
console.log(a + b);

// 3eme solution
var a = 5;
var b = 3;
var c = a + b;
console.log(c);


// ++++ EXO 2 ++++
// quels sont les types des variables suivantes?
var a = 'Javascript'; // String
var b = 'true'; // String
var c = true; // Boolean
var d = 100; // Number

// ++++ Exo 3 ++++
// que valent les variables suivantes ? 
var a = 'Javascript';  // => La chaine 'Javascript'
var b = 'true'; // => la chaine 'true';
var c = a + b; // l'operateur + entre deux Strings : il fait la concatenation entre les deux chaines 
// 'Javascript' + 'true' => 'Javascripttrue'

var d = 100 ; // => le nombre 100
var e = a + d; // 'Javascript' + 100 => 'Javascript' + '100' => 'Javascript100'

// ====================== Strings ====================
// Mini exo : afficher votre nom et votre prénom (nom et prenom se sont des variables)
// Exemple :  => bonjour je suis Mohamed Rabhi

// 1ere solution
var prenom = 'Mohamed';
var nom = 'Rabhi';
console.log('Bonjour je suis ' + prenom + ' ' + nom);

// 2eme solution
var prenom = 'Mohamed';
var nom = 'Rabhi';
console.log('Bonjour je suis', prenom, nom); // , : fait la concatenation et ajoute un éspace


// 3eme solution 
var prenom = 'Jean';
var nom = 'Dupont';
var salutation = 'Bonjour je suis '
console.log(salutation + prenom + ' ' + nom)

// +++ autre solution
var presentation = 'bonjour je suis ' + prenom + ' ' + nom;
console.log(presentation);


// le prof a dit : "il faut toujours pratiquer 
// pour maitriser le langage js"


// \ : alt gr + 8
// \n : saut de ligne
console.log("le prof a dit : \"il faut toujours pratiquer\npour maitriser le langage js\"");


console.log('le prof a dit : "il faut toujours d\'habitude pratiquer pour maitriser le langage js"');


// comment afficher la longeur d'une chaine de caractère ?
var phrase1 = 'bonjour tout le monde!'

var phrase2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus consectetur veniam iusto, nesciunt, lre. Quam tempore officia animi! Accusamus eveniet similique suscipit distinctio.';
// on utilise la propriete length
// length est une propriete des variables de type : String
console.log(phrase2.length)
console.log(phrase2[phrase2.length / 2])


// comment accèder à un caractère d'une chaine de caractère: 
var phrase1 = 'bonjour tout le monde!'
console.log(phrase1[6]); // r
console.log(phrase2.charAt(6)) // r

// comment afficher le dernier caractère de la variable phrase2
var dernierCaractère = phrase2[phrase2.length - 1]


//  ---------------------------- CONSTANTE ------------------------------
// une variable pourra changer sa valeur ultérieurement
var m = 12;
m = 15;
m = 0;

// une constante : ne pourra pas changer sa valeur, valeur restera fixe
const PI = 3.14;
PI = 10;


// -------- SOLUTION EXO ----------
// le système solaire est constitué de 9 planètes
const nbrPlanetesSystemeSolaire = 9;
// l'hydrogène a un électron
const nbrElectronHydrogene = 1;
// en ce moment , il ya 12 personnes dans la salle d'attentes
var nbrPersonnes = 12;
// au jour d'aujourd'hui , il y a 1420 satellites starling opérationnels
var nbrSat = 1420;

