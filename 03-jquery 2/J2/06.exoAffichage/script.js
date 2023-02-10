

const pokemonPick = ['bellossom', 'bulbasaur', 'butterfree', 'calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki', 'squirtle', 'sudowoodo', 'xatu', 'zarude'];

function randomPokemon (){
    return pokemonPick[Math.floor(Math.random() * pokemonPick.length)]
};

console.log(randomPokemon());


function randomPick (){
    return '<img src="assets/'+ randomPokemon() +'.png">'
};

console.log(randomPick());

$('div').children().click(function(){
    $(this).parent().append(randomPick());
});

// $('div').children().click(function(){
    
//     if ($(this).siblings().length === 0){
//         $(this).parent().append(randomPick());
//     } else {
//         $(this).siblings().toggle();
//     }
// });

console.log($('div').children())







///////////////////////////////////////////////////
