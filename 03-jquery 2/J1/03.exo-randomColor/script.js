

// console.log(Math.floor(Math.random()));

// let r = Math.floor(Math.random()*256); 
// let g = Math.floor(Math.random()*256);
// let b = Math.floor(Math.random()*256);

// console.log(r);
// console.log(g);
// console.log(b);

// console.log('rgb(' + r + ',' + g + ',' + b + ')')

// let colorRandomRGB = 'rgb(' + r + ',' + g + ',' + b + ')';

// console.log(colorRandomRGB);



function colorFunction (){
    return 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')'
};

$('.col-sm').mouseover(function(){
    $(this).css('backgroundColor', colorFunction);
})

$('.col-sm').click(function(){
    $(this).text(" ");
})



// $('#col1').click(function(){
//     $('#col1').css('backgroundColor', colorFunction);
// })

// $('#col2').click(function(){
//     $('#col2').css('backgroundColor', colorFunction);
// })

// $('#col3').click(function(){
//     $('#col3').css('backgroundColor', colorFunction);
// })

// $('#col4').click(function(){
//     $('#col4').css('backgroundColor', colorFunction);
// })

// $('#col5').click(function(){
//     $('#col5').css('backgroundColor', colorFunction);
// })

// $('#col6').click(function(){
//     $('#col6').css('backgroundColor', colorFunction);
// })

// $('#col7').click(function(){
//     $('#col7').css('backgroundColor', colorFunction);
// })

// $('#col8').click(function(){
//     $('#col8').css('backgroundColor', colorFunction);
// })

// $('#col9').click(function(){
//     $('#col9').css('backgroundColor', colorFunction);
// })


// console.log($('.row>.col-sm').eq(1));





