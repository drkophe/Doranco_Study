
// comment créer des éléments html avec JS
// ================== createElement ==================
// createElement : retourne un noeud
// type de nouveauElement : objet
var nouveauElement = document.createElement('p');
console.log(nouveauElement);

// ajouter du contenu tesxtuel au noeud p
nouveauElement.textContent = 'Contenu textuel du paragraphe';

// +++++++++ but : attacher le nouveauElement à la balise body
// ++++++++ 1ere étape : récupération de la balise body
var body = document.querySelector('body'); // Noeud
var body2 = document.getElementsByTagName('body'); // HTMLCollection
var body3 = document.body;  // Noeud

// ++++++++ 2eme étape : ajouter le nouveau noeud à la balise body
// append: permet d'ajouter un noeud enfant à un noeud existant
// append : ajoute le noeud à la fin du parent
body.append(nouveauElement);


body.prepend(nouveauElement)



// ================== EXO ==================
const dragons = ['drogon', 'rhaegal', 'viserion'];
// créer une liste UL de dragons et ajouter la après l'image du dragon violet
// la liste ul contient des li
// chaque li contient le nom d'un dragon (du tableau)

// 1ere solution
var ul = document.createElement('ul');

var li1 = document.createElement('li'); // Noeud objet
var li2 = document.createElement('li');// Noeud objet
var li3 = document.createElement('li');// Noeud objet

li1.textContent = dragons[0];
li2.textContent = dragons[1];
li3.textContent = dragons[2];

ul.append(li1)
ul.append(li2)
ul.append(li3)

document.body.append(ul);

// 2eme solution(meilleure)
var ul = document.createElement('ul');
for(var i = 0 ; i < dragons.length ; i++){
    var li = document.createElement('li');
    li.textContent = dragons[i];
    ul.append(li);
}
document.body.append(ul);


// ======================= Naviguer dans le dom  =======================
var imgDragon = document.getElementById('img1'); // Noeud objet
console.log(imgDragon)
var parentImgDragon = imgDragon.parentNode;
console.log(parentImgDragon)

// noeuds enfants
var body = document.body;
console.log(body.childNodes)// retourne un NodeList
// childNodes : permet de selectionner les enfants de manière récursive


console.log('premier enfant de body : ', body.firstChild);
console.log('dernier enfant de body : ', body.lastChild);

console.log('frere suivant ', imgDragon.nextElementSibling);
console.log('frere precedant ', imgDragon.previousElementSibling);


// insérer des éléments adjacents:
var span = document.createElement('span');
span.textContent = 'Nouveau Span';
// permet d'ajouter un element avant la fin du noeud selectionné(avant la balise de fermeture)
document.querySelector('ul').insertAdjacentElement('beforeend', span);

// permet d'ajouter un element apres la fin du noeud selectionné(apres la balise de fermeture)
document.querySelector('ul').insertAdjacentElement('afterend', span);

// permet d'ajouter un element avant le début du noeud selectionné(avant la balise d'ouverture)
document.querySelector('ul').insertAdjacentElement('beforebegin', span);

// permet d'ajouter un element après le début du noeud selectionné(avant la balise d'ouverture)
document.querySelector('ul').insertAdjacentElement('afterbegin', span);


















/********** MA VERSION ******** */


// comment créer des éléments html avec JS
// ================== createElement ==================
// createElement : retourne un noeud
// type de nouveauElement : objet






// var nouveauElement = document.createElement('p');
// console.log(nouveauElement);

// // ajouter du contenu tesxtuel au noeud p
// nouveauElement.textContent = 'Contenu textuel du paragraphe';



// // +++++++++ but : attacher le nouveauElement à la balise body
// // ++++++++ 1ere étape : récupération de la balise body




// var body = document.querySelector('body'); // Noeud
// var body2 = document.getElementsByTagName('body'); // HTMLCollection
// var body3 = document.body;  // Noeud



// // ++++++++ 2eme étape : ajouter le nouveau noeud à la balise body
// // append: permet d'ajouter un noeud enfant à un noeud existant
// // append : ajoute le noeud à la fin du parent
// body.append(nouveauElement);


// body.prepend(nouveauElement)

// // exo : 
// // ================== EXO ==================
// const dragons = ['drogon', 'rhaegal', 'viserion'];
// créer une liste UL de dragons et ajouter la après l'image du dragon violet
// la liste ul contient des li
// chaque li contient le nom d'un dragon (du tableau)


// 1er solution **********************************





// var ul = document.createElement('ul');

// var li1 = document.createElement('li'); // Noeud Objet
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// li1.textContent = dragons[0];
// li2.textContent = dragons[1];
// li3.textContent = dragons[2];

// ul.append(li1);
// ul.append(li2);
// ul.append(li3);

// // var body = document.body;
// // body.append(ul);

// document.body.append(ul);





// 2e solution **************   BEST   *************




// var ul = document.createElement('ul');
// for (var i = 0 ; i < dragons.lenght ; i++){
//     var li = document.createElement('li');
//     li.textContent = dragons[i];
//     ul.append(li);
// }
// document.body.append(ul);




/***********   MES ESSAIS   ************ */



// let liste = document.createElement('ul');
// liste.textContent = "<li>drogon</li><li>rhaegal</li><li></li>"

// body.prepend(liste);


// var liste = document.createElement('ul');
// let varDragon = dragons[0];

// for(var i = 0; i < dragons.length ; i++ ){
//     varDragons += dragons[i];
// }

// liste.innerHTML = ('<li>' + varDragon + '</li><li>' + varDragon + '</li><li>' + varDragon + '</li>');

// // liste.innerHTML = ('<li>' + dragons[0] + '</li><li>' + dragons[1] + '</li><li>' + dragons[2] + '</li>');

// var body = document.querySelector('body');


// body.append(liste)


// insérer des éléments adjacents:
// var span = document.createElement('span');
// span.textContent = 'Nouveau Span';

// document.querySelector('ul').insertAdjacentElement('beforeend', span); // avant la fin de l'ul (en tant que dernier enfant de 'ul')
// document.querySelector('ul').insertAdjacentElement('afterend', span); // après la fin de l'ul (en tant que frère de 'ul')
// document.querySelector('ul').insertAdjacentElement('beforebegin', span); // avant le debut de l'ul (en tant que frère de 'ul')
// document.querySelector('ul').insertAdjacentElement('afterbegin', span); // après le debut de l'ul (en tant que premier enfant de 'ul')