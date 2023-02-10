// 1- cibler la balise qui a comme identifiant p1
// affecter le résultat à la variable pNode
var pNode = document.getElementById("p1");
// 2- afficher dans la console le contenu textuel de la variable pNode en utilisant la propriete textContent ( NB : pNode est un objet qui contient la propriete textContent)
console.log(pNode.textContent);
// 3- afficher dans la console le contenu html de la variable pNode en utilisant la propriete innerHTML ( NB : pNode est un objet qui contient la propriete innerHTML)
console.log(pNode.innerHTML);

// 4- modifier le contenu textuel de la variable pNode(qui est un objet)
pNode.textContent = "Le contenu de cette balise à été modifier avec le langage js";
// 5- cibler la balise qui a l'id p2 , et modifier son contenu HTML avec innerHTML
var p2Node = document.getElementById('p2');
p2Node.innerHTML = '<h1>Voici une balise h1 </h1>';

// =================== STYLE ===================
pNode.style.color = 'red';

// 6- modifier la taille de text du contenu de la variable pNode en utilisant la propriete style
pNode.style.fontSize = '30px';
// 7- modifier la couleur de fond du noeud pNode en utilisant la propriete style
pNode.style.backgroundColor = 'blue';

// Différence entre textContent et innerHTML : 
// textContent : permet de modifier le texte sans prendre en considération les balises textuelles
// innherHTML : interprete les balises texutelles et transforme la chaine en balise

