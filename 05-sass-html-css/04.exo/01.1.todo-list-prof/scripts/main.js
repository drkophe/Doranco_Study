let userInput = document.querySelector('.main-form__user-input');

let addBtn = document.querySelector('.add-btn');

let listItems = document.querySelector('.list-items');

function createItem(value){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let icon = document.createElement('ion-icon');

    div.classList.add('item'); 
    icon.setAttribute('name', 'close-circle-outline');
    icon.setAttribute('id', 'delete');
    p.textContent = value;
    div.appendChild(p);
    div.appendChild(icon);
    listItems.appendChild(div);

    div.style.opacity = 0;
    div.offsetHeight; // force the DOM to reflow
    div.style.transition = 'opacity ease 750ms';
    div.style.opacity = 1;
    

}

addBtn.addEventListener('click', function(event){
    // event : c'est un objet
    // preventDefault : interdit l'actualisation de la page
    event.preventDefault();
    // verification de la valeur du champ de saisie
    console.log('test click');
    // trim() : méthode qui enleve les espaces au début et à la fin de la chaine de caractères
    if(userInput.value.trim().length > 3){
       createItem(userInput.value);
       userInput.value = '';
    }
})

listItems.addEventListener('click', function(event){
    // condition qui verifie la cible ( le bouton rouge)
    if(event.target.id === 'delete'){
        event.target.parentNode.remove();
    }
})