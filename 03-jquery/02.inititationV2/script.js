// $('#premierH');
// $('#premierP');
// $('#premiereDiv');
// $('#premiereDiv>h1');
// $('#premiereDiv>p');

// console.log($('#premierH'));
// console.log($('#premierP'));
// console.log($('#premiereDiv'));
// console.log($('#premiereDiv>h1'));
// console.log($('#premiereDiv>p'));
// console.log($('.div1'));

// let newH1 = $('#premierH').text('Nouveau H1');


// $('#premierH').click(function (){
//     $('#premierH').text('Nouveau H1');
// });

// $('#premierP').click(function (){
//     $('#premierP').text('Nouveau paragraphe1');
// });

// $('#premiereDiv>h1').click(function (){
//     $('#premiereDiv>h1').text('Nouveau H1 de la DIV');
// });

// $('#premiereDiv>p').click(function (){
//     $('#premiereDiv>p').text('Nouveau paragraphe de la DIV');
// });


// $('#premierH').mouseover(function (){
//     $('#premierH').text('New : Initiation à JQuery');
// });

// $('#premierP').mouseover(function (){
//     $('#premierP').text('New : Durant trois jours, nous allons comprendre les bases de JQuery.');
// });

// $('#premiereDiv>h1').mouseover(function (){
//     $('#premiereDiv>h1').text('New : JQuery est une librairie');
// });

// $('#premiereDiv>p').mouseover(function (){
//     $('#premiereDiv>p').text('New : Nous allons la tester');
// });


////////////////////////

$('#premierH').click(function (){
    $('#premierH').html('<h2>Petit Titre h2</h2>');
});

// $('#premierP').click(function (){
//     $('#premierP').html('<img src= "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width = "100">');
// });

$('#premierP').click(function (){
    $('#premierP').css('backgroundColor','red');
});

/////////////////////////////


$('#premiereDiv>h1').mouseover(function (){
    $('#premiereDiv>h1').html('<h3>New : JQuery est une librairie en h3</h3>');
});

$('#premiereDiv>p').mouseover(function (){
    $('#premiereDiv>p').html('<img src = "https://images.unsplash.com/photo-1674461439443-55d889c3a894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">');
});





