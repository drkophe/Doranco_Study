// $('.parag').click(function(){
//     $(this).css('color','red')
// })

// $('#p1').click(function(){
//     $('#p4').toggleClass('rouge')
// }) 

// $('#p2').click(function(){
//     $('#p4').toggleClass('taille')
// }) 

// if($('#p1').text() == 'Paragraphe 1'){
//         $('#p1').text('Nouveau contenu') }
//     else{
//         $('#p1').text('Paragraphe 1')
//     }

// $('#p1').click(function(){
    
//     console.log($('#p4').parent())
// })

// $('#p2').click(function(){
    
//     console.log($('#p4').next())
// })

// $('#titre1').click(function(){
//     $('#div1').append('<img src="https://images.unsplash.com/photo-1673624801456-91d2af12ebf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"></img>')
// })


// $('#btn2').click(function(){
//     $('#titre1').hide();
// })

// $('#btn1').click(function(){
//     $('#titre1').show();
// })

// $('#btn3').click(function(){
//     $('#titre1').toggle();
// })

$('#btn2').click(function(){
    $('#titre1').fadeOut(3000,function(){
        $('#titre1').fadeIn(3000,function(){
            $('#titre1').fadeOut(3000)
        })        
    })           //.slideUp()    //fadeOut(); //hide()
})

$('#btn1').click(function(){
    $('#titre1').fadeIn(3000)          //.slideDown()             //fadeIn(); //show()
})

$('#btn3').click(function(){
    $('#titre1').fadeToggle(2000)         //.slideToggle() 
    //.fadeToggle();
})