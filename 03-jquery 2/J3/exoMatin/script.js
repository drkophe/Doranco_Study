// $('.question').click(function(){
//     $(this).next().toggleClass('collapse');
// });

$('.question').click(function(){
    $(this).next().slideToggle();
    $(this).children().slideToggle();
});


// $('.question').click(function(){
//     $(this).children().slideToggle();
// });

$('.question').children().mouseover(function(){
    $(this).fadeIn(2000);
    $(this).fadeOut(2000);
});

