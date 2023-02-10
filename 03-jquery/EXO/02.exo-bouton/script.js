// $('#but1').click(function(){
//     $('#but1').html('<img src= "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" width= "600">')
// })

// $('#but2').click(function(){
//     $('#but2').html('<img src= "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" height= "600">')
// })

// $('#but3').click(function(){
//     $('#but3').html('<img src= "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" width= "600">')
// })

// $('#div4').click(function(){
//     if ( $('#div4').html('<img id="div4" src= "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" height= "600">') == true){
//             $('#but4').html('<button id="but4">Je suis le plus beau</button>')
//         } else if ( $('#div4').html('<button id="but4">Je suis le plus beau</button>') == true) {
//         $('#div4').html('<img id="div4" src= "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" height= "600">')
//     }
// })

// $('#but1').click(function(){
//     $('#div1').html('<img src="https://media.giphy.com/media/hBEmfUXgpKbnHk3t4C/giphy.gif" />')
// })

// $('#but2').click(function(){
//     $('#div2').html('<img src="https://media.giphy.com/media/S6lailCELIu6nl46IP/giphy.gif" />')
// })

// $('#but3').click(function(){
//     $('#div3').html('<img src="https://media.giphy.com/media/kbkjRM1eKrkQx0joEj/giphy.gif" />')
// })

// $('#but4').click(function(){
//     $('#div4').html('<img src="https://media.giphy.com/media/VhR8jQKZWdrvw6o9ou/giphy.gif" />')
// })

$('#but1').mouseover(function(){
    $('#but1').css('fontWeight','bold')
})

$('#but2').mouseover(function(){
    $('#but2').css('fontSize','30px')
})

$('#but3').mouseover(function(){
    $('#but3').css('backgroundColor','red')
})

// $('#but4').mouseover(function(){
//     $('#but4').css('fontFamily','Explora');
//     $('#but4').css('border','solid 10px black');
// })

console.log(Math.floor(Math.random()));

let r = Math.floor(Math.random()*256); 
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);

console.log(r);
console.log(g);
console.log(b);

console.log('rgb(' + r + ',' + g + ',' + b + ')')

function colorFunction (){
    return 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')'
};

let colorRandomRGB = 'rgb(' + r + ',' + g + ',' + b + ')';

console.log(colorRandomRGB);

$('#but4').click(function(){
    $('#but4').css('backgroundColor', colorFunction);
})