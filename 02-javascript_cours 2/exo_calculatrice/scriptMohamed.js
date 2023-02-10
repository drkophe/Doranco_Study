// récupération des boutons:
// getElementsByClassName : retourne un nodeList(PAS UN TABLEAU)
var boutons = document.getElementsByClassName('button');
var noeudResultat = document.getElementById('result');

function afficherResulat(valeur) {
    // noeudResultat.value =  noeudResultat.value + valeur;
    noeudResultat.value += valeur;
}


// ajout d'un event à chaque bouton:
// 1ere approche 👍 
// for (var i = 0; i < boutons.length; i++) {
//     boutons[i].addEventListener('click', function(){
//         console.log(i);
//     })
// }

// 2eme approche : 
// push , unshift, shift , pop
// Array.from(boutons) => permet de convertir boutons(qui est nodeList) en tableau de js
// nodeList => tableau
Array.from(boutons).forEach(function (bouton) {
    if (bouton.value !== 'C' && bouton.value !== '=') {

        bouton.addEventListener('click', function () {
            afficherResulat(bouton.value)
        })

    }
    else if (bouton.value === 'C') {
        bouton.addEventListener('click', function () {
            noeudResultat.value = '';
        })
    } else if (bouton.value === '=') {
        bouton.addEventListener('click', function () {
           try {
               
               noeudResultat.value = eval(noeudResultat.value)
           } catch (error) {
            noeudResultat.value = "error"
           }
        })
    }
});