

$('.mot').mouseover(function (){
    $(this).toggleClass('color');
});

$('.mot').click(function (){
    $(this).next().toggleClass('cache');
});

// console.log($('.image'));

// $('').click(function(){
//     $('image').toggleClass('cache');
// })
