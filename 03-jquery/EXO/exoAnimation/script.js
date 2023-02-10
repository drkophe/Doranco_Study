function animationRed (){
    $('#red').animate({left:'1785px'},2000, function(){
        $('#red').animate({top:'700px'},2000, function(){
            $('#red').animate({left:'10px'},2000, function(){
                $('#red').animate({top:'10px'},2000, animationRed)
            })
        })
    })
};

function animationBlue (){
    $('#blue').animate({right:'1785px'},2000, function(){
        $('#blue').animate({bottom:'700px'},2000, function(){
            $('#blue').animate({right:'10px'},2000, function(){
                $('#blue').animate({bottom:'10px'},2000, animationBlue)
            })
        })
    })
};


function animationGreen (){
    $('#green').animate({bottom:'700px'},2000, function(){
        $('#green').animate({left:'1785px'},2000, function(){
            $('#green').animate({bottom:'10px'},2000, function(){
                $('#green').animate({left:'10px'},2000, animationGreen)
            })
        })
    })
};


function animationYellow (){
    $('#yellow').animate({top:'700px'},2000, function(){
        $('#yellow').animate({right:'1785px'},2000, function(){
            $('#yellow').animate({top:'10px'},2000, function(){
                $('#yellow').animate({right:'10px'},2000, animationYellow)
            })
        })
    })
};

function animation (x, y, back, div){
    let top = '{top:"' + x +'px"}'
    let right = '{right:"' + y +'px"}'
    let backPos = '{top:"' + back +'px"}'


    $('#' + div).animate(top ,2000, function(){
        $('#' + div).animate(right ,2000, function(){
            $('#' + div).animate(backPos ,2000, function(){
                $('#' + div).animate(backPos ,2000, animation)
            })
        })
    })    
}


// function animationRed (){
//     $('#red').animate({left:'1785px'},2000, function(){
//         $('#red').animate({left:'10px'},2000, animationRed())
//     })
// }

// function animationBlue (){
//     $('#blue').animate({right:'1785px'},2000, function(){
//         $('#blue').animate({right:'10px'},2000, animationBlue())
//     })
// }

// function animationGreen (){
//     $('#green').animate({bottom:'700px'},2000, function(){
//         $('#green').animate({bottom:'10px'},2000, animationGreen())
//     })
// }

// function animationYellow (){
//     $('#yellow').animate({top:'700px'},2000, function(){
//         $('#yellow').animate({top:'10px'},2000, animationYellow())
//     })
// }



$('#start').click(function(){
    // animationRed();
    // animationBlue();
    // animationGreen();
    // animationYellow();
    animation(700, 1785, 10, 'yellow');
});

$('#stop').click(function(){
    $('div').stop(true,true);
})



// $('#btn1').click(function(){
//     function animation(){
//     $('#div1').animate({left:'1200px' },3000, function(){
//         $('#div1').animate({left:'50px' },3000,animation())
//         })
    
//             }

//             animation()

// })

// $('#btn2').click(function(){
//     $('#div1').stop(true,true)
// })


// .carre{
//     width: 100px;
//     height: 100px;
//     background: red;
//     position: absolute;
//     left: 50px;
//     top: 50px;
// }