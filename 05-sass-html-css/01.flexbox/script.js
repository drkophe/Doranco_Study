
// $('img').click(function(){
//     $('nav').slideToggle()
// })

img = document.getElementById('img');
nav = document.querySelector('nav');

img.addEventListener('click', function(){

    if (nav.style.left == '-70px'){
        nav.style.left = '-270px';
    } else {
        nav.style.left = '-70px';
    }
    
})