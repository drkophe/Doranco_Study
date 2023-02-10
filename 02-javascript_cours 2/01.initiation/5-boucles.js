// pourquoi doit-on utiliser les boucles ? 
var x = 0;
x = x + 1; // 0 + 1 = 1
x = x + 1; // 2
x = x + 1; // 3
x += 1;
x++;
x++;
x++;
x++;
x++;
x++;
console.log('x : ', x); // VALEUR FINALE : 10

// afficher dans la console bonjour 10 fois chaque bonjour doit etre affiché dans une nouvelle ligne
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');
console.log('bonjour');


// afficher dans la console bonjour 100000 fois chaque bonjour doit etre affiché dans une nouvelle ligne





//-------------------------------------------------- Les boucles : 
// afficher le 'bonjour' 2 fois
for (var i = 0; i < 2; i++) {
    console.log('bonjour')
}

// la boucle for : 
// qui est une boucle qui fonctionne avec un compteur. 
// qu'est-ce que ça veut dire ? ça veut tout simplement dire que la condition d'arrêt de cette boucle 
// (elle arrête de répéter l'exécution des instructions) selon un compteur 
// soit le compteur arrive à 0, ou à un certain nombre, qu'on défini dans la condition 

// la syntaxe est la suivante :
for (let compteur = une_valuer; condition_sur_le_compteur; compteur++ ou compteur--) {
    // compteur++ veut dire que le compteur s'incrémente de 1 à chaque itération 
    // compteur-- veut dire que le compteur décrmente de 1 à chaque itération 

    // entre les crochets on met toutes les instructions à répéter 
}


// ----------------- Exercice -----------------
// donner le script qui permet d'afficher 'itération x' dans la console, avec x allant de 0 à 99
for (var x = 0; x <= 99; x++) {
    console.log('itération : ', x);
}

for (var x = 0; x < 100; x += 1) {
    console.log('itération : ', x);
}

// donner le script qui permet d'afficher les nombres dans un ordre décroissant (120,119.....2,1,0)
for (var x = 120; x >= 0; x--) {
    console.log('x : ', x);
}

for (var x = 120; x > -1; x = x - 1) {
    console.log('x : ', x);
}


// afficher les nombres pair qui sont entre 0 et 100 (0 et 100 sont inclue)

// Solution 1 
for (var x = 0; x <= 100; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

// Solution 2
for (var x = 0; x <= 100; x += 2) { 
    console.log(x);
}

// ---------------------- BOUCLE WHILE (TANTQUE)-------------------
while(condition_darret){

}



for (var x = 120; x >= 0; x--) {
    console.log('x : ', x);
}

var x = 120;
while(x >= 0){
    console.log('bonjour');
    x--;
}