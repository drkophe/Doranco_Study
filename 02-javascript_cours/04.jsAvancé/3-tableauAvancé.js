var tab = [12,88, 99];
// ajouter une valeur à la fin du tableau:
// la méthode push
tab.push(33);

// ajouter une valeur au début du tableau
tab.unshift(66);

// supprimer la dernier valeur du tableau: 
// retourne la valeur supprimer 
tab.pop();

// supprimer la premier valeur du tableau: 
tab.shift();

// supprimer une valeur au milieu
// filter, slice, splice
// slice(index de l'élement à supprimer, index d'arret)
tab = tab.slice(0,1).concat(tab.slice(2,3)) 

// splice(index de l'élement à supprimer , nombre d'éléments à supprimer)
tab.splice(1,1);


// génerer un tableau de nombre aléatoire de 10 élements ( les nombres aléatoire sont entre 0 et 100)

// ecriver une fonction qui permettera de supprimer la plus grande valeur et la plus petite valeur (depuis le tableau generé)
