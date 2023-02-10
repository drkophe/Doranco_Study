console.log($('#todo-list-item').val());

$('ul').css('listeStyle','initial')

$('.add-items').submit(function(event){
    event.preventDefault();
})

$('.add').click(function(){
    let input = $('#todo-list-item').val();
    console.log(input);
    $('#list-items').append('<ol>' + input + '</ol>')
})
