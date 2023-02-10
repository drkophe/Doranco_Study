// --------------------- Les evenements --------------------
// 1ere étape : identification du lieu
// cibler le bouton 'mettre refrains en bleu' et affecter le résultat à une variable btnRefrains
var btnRefrains = document.getElementById('but1');
var btnCouplets = document.getElementById('but2');

// 2eme étape : ecouter l'évenement
// btnRefrains : est un objet , qui contient la méthode addEventListener
// addEventListener : accepte pour argument deux valeurs : type de l'évent et une fonction callback

// click : est un type d'évenement
// une fonction callback : une fonction qui est passé en tant qu'argument pour une une autre fonction
// une fonction anonyme : une fonction qui n'a pas de nom
// var refrains = document.getElementsByClassName('refrain');
// btnRefrains.addEventListener('click', function () {
//     // ....
//     // refrains : HTMLCollection [Noeud , Noeud, Noeud]
//     if (btnRefrains.textContent === 'Mettre les refrains en bleu') {
//         for (var i = 0; i < refrains.length; i++) {

//             refrains[i].style.color = 'blue';
//         }
//         btnRefrains.textContent = 'Mettre les refrains en noir'
//     } else {
//         for (var i = 0; i < refrains.length; i++) {

//             refrains[i].style.color = 'black';
//         }
//         btnRefrains.textContent = 'Mettre les refrains en bleu'
//     }
//     // BOUCLE

// });


// var couplets = document.getElementsByClassName('couplet');
// btnCouplets.addEventListener('click', function () {
//     // ....
//     // refrains : HTMLCollection [Noeud , Noeud, Noeud]

//     // BOUCLE
//     for (var i = 0; i < couplets.length; i++) {

//         couplets[i].style.color = 'red';
//     }
// });



// ---------------------------2Eme solution -------------------------------
var refrains = document.getElementsByClassName('refrain');
var btnClickRerfrain = false;
btnRefrains.addEventListener('click', function () {
    // ....
    // refrains : HTMLCollection [Noeud , Noeud, Noeud]
    if (btnClickRerfrain == true) {
        btnClickRerfrain = false;
        btnRefrains.textContent = 'Mettre les refrains en noir';
        btnRefrains.style.backgroundColor = 'white';
        for (var i = 0; i < couplets.length; i++) {

            refrains[i].style.color = 'blue';
        }

    } else {
        btnClickRerfrain = true;
        btnRefrains.textContent = 'Mettre les refrains en bleu';
        btnRefrains.style.backgroundColor = 'lightblue';
        for (var i = 0; i < couplets.length; i++) {

            refrains[i].style.color = 'black';
        }
    }
    // BOUCLE

});


var couplets = document.getElementsByClassName('couplet');
btnCouplets.addEventListener('click', function () {
    // ....
    // refrains : HTMLCollection [Noeud , Noeud, Noeud]

    // BOUCLE
    for (var i = 0; i < couplets.length; i++) {

        couplets[i].style.color = 'red';
    }
});


// -------------- MON CODE ----------------------//

// var btnRefrains = document.getElementById('but1');
// var refrains = document.getElementsByClassName('refrain');
// btnRefrains.addEventListener('click', function(){
//     for(var i = 0; i < refrains.length; i++){
//         if (btnRefrains.innerText == "Mettre les refrains en bleu"){
//             refrains[i].style.color = 'blue';
//             btnRefrains.innerText = "Mettre les refrains en noir"
//         }else {
//             refrains[i].style.color = 'black';
//             btnRefrains.innerText = "Mettre les refrains en bleu"
//         }
        
//     }
    
    
// });
// // btnRefrains.addEventListener('click', function(){
// //     for(var i = 0; i < refrains.length; i++){
// //         refrains[i].style.color = 'black';
// //     }
// //     btnRefrains.innerText = "Mettre les refrains en bleu"
    
// // });





// // function test1(x){

// // }

// // function test2(){

// // }

// // ecricre un ode qui permet de colorier les couplet en rouge 

// var btnCouplet = document.getElementById('but2');

// var couplets = document.getElementsByClassName('couplet');
// // btnCouplet.addEventListener('click', function(){
// //     for(var i = 0; i < couplets.length; i++){
// //         if (btnCouplet.innerText == "Mettre les couplets en rouge"){
// //             couplets[i].style.color = 'red';
// //             btnCouplet.innerText = "Mettre les couplets en noir"
// //         }else {
// //             couplets[i].style.color = 'black';
// //             btnCouplet.innerText = "Mettre les couplets en rouge"
// //         }
        
// //     }
// // });


// btnCouplet.addEventListener('click', function(){
//     if (btnCouplet.innerText == "Mettre les couplets en rouge"){
//         for(var i = 0; i < couplets.length; i++){
//             couplets[i].style.color = 'red';
//             btnCouplet.innerText = "Mettre les couplets en noir"
//         }  
//     }else {
//         for(var i = 0; i < couplets.length; i++){
//             couplets[i].style.color = 'black';
//             btnCouplet.innerText = "Mettre les couplets en rouge"
//         }

//     }
// }

// // changer le bouton 
