///////////////////////////////////////
/// DEFINIR CE QUE JE VAIS UTILISER ///
///////////////////////////////////////

// Selection des boutons
let but = document.getElementsByClassName('button');

// Selection de l'affichage du resultat
let display = document.getElementById('result');

// Définir la valeurs précédente; la nouvelle valeur, l'opération à effectuer entre la valeur précédente et la nouvelle valeur
let currentValue = null;
let newValue = null;
let operation = null;

// Convertir le 'but' (HTMLCollection) en tableau pour utiliser 'forEach'
butTab = [];
for (i=0 ; i < but.length ; i++){
    // Ajouter la valeur (dans le talbeau) de l'index 'but' à chaque itération de 'but' 
    butTab.push(but.item(i));
}
console.log(butTab);


///////////////////////////////////////
////// ALGRORYTHME CALCULATRICE ///////
///////////////////////////////////////


butTab.forEach(function(element){
    // element = chaque itération du tableau (donc chaque bouton de la calculatrice)
    console.log(element);

    element.addEventListener('click', function(){
        if (element.value >= 0 && element.value <=9){
        // Si c'est un nombre compris entre 0 et 9
            console.log(element.value)
            // Ajouter (=+) la valeur du bouton compris entre 0 et 9 sur l'affichage du resultat 
            display.value += element.value;

        }else if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*'){
        // Sinon si la valeur du bouton cliqué est égale à '+' ou '-' ou '/' ou '*'
            currentValue = display.value;
            console.log(currentValue);
            // la valeur comprise dans l'affichage du resultat devient 'currentValue'
            display.value = null;
            // efface ce qui est afficher dans la l'affichage du resultat
            operation = element.value;
            console.log(operation);
            // la variable 'operation' prend la valeur du bouton cliquer ('+' ou '-' ou '/' ou '*')

        }else if (element.value == '='){
        // Sinon si la valeur du bouton cliqué est égale à '='
            newValue = display.value;
            // la valeur comprise dans l'affichage du resultat devient 'newValue'
            console.log(newValue);
            console.log(currentValue);

            display.value = null;
            // efface ce qui est afficher dans la l'affichage du resultat

            if (operation == '+'){
            // Si la variable operation est egale à '+'
                display.value = parseFloat(currentValue) + parseFloat(newValue);
                // l'affiche du resultat devient : la valeur précedente (converti en nombre) additionné à la nouvelle suivante
            }else if (operation == '/'){
            // Si la variable operation est egale à '/'
                display.value = parseFloat(currentValue) / parseFloat(newValue);
                // l'affiche du resultat devient : la valeur précedente (converti en nombre) divisé à la nouvelle suivante
            }else if (operation == '-'){
            // Si la variable operation est egale à '-'
                display.value = parseFloat(currentValue) - parseFloat(newValue);
                // l'affiche du resultat devient : la valeur précedente (converti en nombre) soustrait à la nouvelle suivante
            }else if (operation == '*'){
            // Si la variable operation est egale à '*'
                display.value = parseFloat(currentValue) * parseFloat(newValue);
                // l'affiche du resultat devient : la valeur précedente (converti en nombre) multiplié à la nouvelle suivante
            }

        }else if (element.value == 'C'){
        // Sinon si la valeur du bouton cliqué est égale à 'C'
            console.log('c');
            display.value = null;
            // efface ce qui est afficher dans la l'affichage du resultat
            currentValue = null;
            newValue = null;
            operation = null;
            // reset les variables
        }

    })
});
