// choisir aléatoirement une image 
// l'afficher quand on clique un bouton


//en utilisant une fonction

let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];

//Pour récupérer un pokemon aléatoirement, on doit générer un nombre (indice)

function rand(){
    return pokemons[Math.floor(Math.random()*pokemons.length)]
}

$('.btn').click(function(){
    
    let image = '<img src="assets/'+rand()+'.png"/>'
    $(this).parent().append(image)
})

// sans utiliser la fonction
// choisir aléatoirement une image 
// l'afficher quand on clique un bouton

let pokemons = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki',
    'squirtle', 'sudowoodo', 'xatu', 'zarude'];

//Pour récupérer un pokemon aléatoirement, on doit générer un nombre (indice)



$('.btn').click(function(){
    let pokemon = pokemons[Math.floor(Math.random()*pokemons.length)]
    let image = '<img src="assets/'+pokemon+'.png"/>'
    $(this).parent().append(image)
})
