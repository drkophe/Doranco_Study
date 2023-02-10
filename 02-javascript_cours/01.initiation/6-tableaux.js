// ------------------------------------------------------ les tableaux :
// les tableaux simples : des vecteurs 
// les vecteurs sont tout simplement une variable dans laquelle on peut mettre plusieurs valeurs 
var tableau = [12, 13, 20, 25, 70];
console.log('Tableau : ', tableau);
// acceder : l'élément qui se trouve à la 3eme position du tableau
console.log(tableau[2]) // 20

var chaines = ["mot", "javascript","langage"];

var mixte = ["javascript", 34, false, true , undefined, null]

// autre exemple: 
console.log('element 0 : ', tableau[0])
console.log('element 1 : ', tableau[1])
console.log('element 2 : ', tableau[2])
console.log('element 3 : ', tableau[3])
console.log('element 4 : ', tableau[4])

// ecrivez un autre script qui permet de faire le meme traitement ci-dessus (en utilisant une boucle FOR)
for(var i = 0; i < tableau.length ; i++ ){
    console.log('element :', tableau[i])
}


for(var i = 0; i <= tableau.length - 1 ; i++ ){
    console.log('element :', tableau[i])

}
// calculer la moyenne à partir d'un tableau de notes et afficher la dans la console

var notes = [12,18,15,14,17, 12, 16];
var somme = 0;

for(var i = 0; i < notes.length ; i++){
    somme += notes[i];   
}

console.log('Moyenne : ', somme / notes.length);