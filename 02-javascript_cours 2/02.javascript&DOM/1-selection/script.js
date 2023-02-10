// ----------------------------- DOCUMENT ---------------------
// document : est un objet prédéfinie dans le langage JS
// document : est un objet qui permet la manipulation du DOM


console.log(document);
// récuperer le noeud h1
// querySelector : méthode
// querySelector : accepte pour argument un String sous la forme d'un selecteur CSS
// retourne un seul élément et c'est le premier noeud trouvé (Node)

var h1Node = document.querySelector("h1");
console.log('LE NOEUD H1 : ', h1Node)
// valeur : noeud h1
// type : objet

// ---------- MINI EXOS ----------
// recuperer la valeur de la balise img dans une variable img , et afficher le résultat dans la console en utilisant deux selecteurs différents
var imgNode = document.querySelector('#img1');
var imgNode = document.querySelector('img');

console.log('LE NOEUD IMG : ', imgNode)

// recuperer la valeur de balise qui a la classe paragraph dans une variable pNode , et afficher le résultat dans la console

var pNode = document.querySelector('.paragraph');
console.log('pnode : ', pNode)

// p > a : selectionne 'a' qui est enfant directe de p
var node = document.querySelector('p > a')

// p img : selection du noeud img frere suivant d'un balise p
var node = document.querySelector('p a')

// p + img : selection du noeud img frere suivant d'un balise p
var node = document.querySelector('p + img');


// ============ document.querySelectorAll ============:
// permet de selectionner l'ensemble des éléments qui correspondent au critère de selection
// retourne un NodeList (pas un array/tableau)
var nodes = document.querySelectorAll('img');
console.log(nodes); // Nodelist[img1, img2]
console.log(nodes[0])

var noeudsP1 = document.querySelectorAll("#p1")
// NodeList [p#p1.paragraph]

var p1Node = document.querySelector("#p1")
// Node p#p1

// ============ document.getElementById :sans le # ============
var elementP = document.getElementById('p1');
// c'est la meilleure , la plus optimale , la plus rapide



var x = document.getElementsByClassName('paragraph')

console.log(x)