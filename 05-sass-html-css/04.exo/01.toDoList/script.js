let ajouter = document.getElementById('submit');
let text = document.getElementById('text');
let ul = document.querySelector('ul')


console.log(ajouter);
console.log(text);
console.log(ul);




ajouter.addEventListener('click',function(){
    if (text.value === ""){
        text.placeholder = 'Ecris ici ...'
    } else {
        let li = document.createElement('li');
        console.log(text.value);
        li.textContent = text.value;
        ul.append(li);

        let close = document.createElement('ion-icon');
        close.setAttribute('name','close-circle-outline')
        li.append(close);

        text.value = "";

        close.addEventListener('click', function(){
            li.remove(this.parentElement);
        })

    }
})

