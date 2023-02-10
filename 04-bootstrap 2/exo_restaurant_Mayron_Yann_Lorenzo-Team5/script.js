$('#submit').click(function(){
    $('form').submit(function(event){
        event.preventDefault();
    })
    $('form').slideToggle();
    $('.alert').slideToggle();

    console.log('Nom : ' + $('.nom').val());
    console.log('Prénom : ' + $('.prenom').val());
    console.log('Email : ' + $('.email').val());
    console.log('N° Telephone : ' + $('.tel').val());
    console.log('Message : ' + $('.message').val());
});