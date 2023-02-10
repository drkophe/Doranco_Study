var tab1 = [];
for (var i = 0; i < 10; i++) {
  tab1.push(Math.floor(Math.random() * 101));
}
console.log(tab1)

var max = Math.max(...tab1);
var min = Math.min(...tab1);
var maxIndex = tab1.indexOf(max);
var minIndex = tab1.indexOf(min);


function removeMinMax() {
    var max = Math.max(...tab1);
    var min = Math.min(...tab1);

    console.log(max);
    console.log(min);
    
    var maxIndex = tab1.indexOf(max);
    tab1.splice(maxIndex, 1);

    var minIndex = tab1.indexOf(min);
    tab1.splice(minIndex, 1);

    return tab1;
  }

console.log(removeMinMax(tab1));

console.log(removeMinMax(tab1));


///////////////// SOLUTION PROF ///////////////////////

// génerer un tableau de nombre aléatoire de 10 élements ( les nombres aléatoire sont entre 0 et 100)

// ecriver une fonction qui permettera de supprimer la plus grande valeur et la plus petite valeur (depuis le tableau generé)

var tab = [];
for(var i = 0; i < 10 ; i++){
    tab.push(Math.floor(Math.random() * 100) + 1);
}

var min = 100;
var max = 0;
var minIndex = -1;
var maxIndex = -1;
[100, 42, 72, 96, 47, 84, 2, 60, 49, 64 ]
tab.forEach(function(valeur, index){
    if(valeur > max){ 
        max = valeur;
        maxIndex = index;
    }else if(valeur < min){
        min = valeur;
        minIndex = index;
    }
})

tab.splice(maxIndex,1);
if(maxIndex < minIndex){
    minIndex --;
}
tab.splice(minIndex, 1);




// ------------------------------------- 2eme ----------------------------------
var tab = [];
for(var i = 0; i < 10 ; i++){
    tab.push(Math.floor(Math.random() * 100) + 1);
}
tab.sort(function(a, b){ // modifie le tableau tab
    return a - b;  // a - b > 0 , a est > b                a - b <= 0  : a est plus petit que b 
}); // sort => trier

tab.splice(0,1);
tab.splice(tab.length - 1 ,1);