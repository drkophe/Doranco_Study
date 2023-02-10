let but = document.getElementsByClassName('button');

console.log(but);

// let butC = but.item(0);

// let but1 = but.item(1);
// let but2 = but.item(2);
// let but3 = but.item(3);
// let butDivision = but.item(4);

// let but4 = but.item(5);
// let but5 = but.item(6);
// let but6 = but.item(7);
// let butMoin = but.item(8);

// let but7 = but.item(9);
// let but8 = but.item(10);
// let but9 = but.item(11);
// let butPlus = but.item(12);

// let butPoint = but.item(13);
// let but0 = but.item(14);
// let butEgale = but.item(15);
// let butMultiplication = but.item(16);

let display = document.getElementById('result');

// console.log(but0);
// console.log(but1);
// console.log(but2);

let currentValue = null;
let newValue = null;
let operation = null;

// but1.addEventListener('click', function(){
//     console.log('1');
//     display.value += '1';
// })

// but2.addEventListener('click', function(){
//     console.log('2');
//     display.value += '2';
// })

// but3.addEventListener('click', function(){
//     console.log('3');
//     display.value += '3';
// })

// but4.addEventListener('click', function(){
//     console.log('4');
//     display.value += '4';
// })

// but5.addEventListener('click', function(){
//     console.log('5');
//     display.value += '5';
// })

// but6.addEventListener('click', function(){
//     console.log('6');
//     display.value += '6';
// })

// but7.addEventListener('click', function(){
//     console.log('7');
//     display.value += '7';
// })

// but8.addEventListener('click', function(){
//     console.log('8');
//     display.value += '8';
// })

// but9.addEventListener('click', function(){
//     console.log('9');
//     display.value += '9';
// })

// but0.addEventListener('click', function(){
//     console.log('0');
//     display.value += '0';
// })

// butPoint.addEventListener('click', function(){
//     console.log('.');
//     display.value += '.';
// })

// butEgale.addEventListener('click', function(){
//     newValue = display.value - currentValue;
//     console.log(newValue);

//     console.log('=');
//     // display.value += '=';
// })

// butMultiplication.addEventListener('click', function(){
//     console.log('*');
//     display.value += '*';
// })

// //

// butPlus.addEventListener('click', function(){
//     currentValue = display.value;
//     console.log(currentValue);
    
//     console.log('+');
//     display.value += '+';
// })

// // butPlus.addEventListener('click', function(){
// //     let currentValue = display.value;
// //     let newValue = eval(currentValue + "+");
// //     display.value = newValue;
// //     });

// //

// butMoin.addEventListener('click', function(){
//     console.log('-');
//     display.value += '-';
// })

// butDivision.addEventListener('click', function(){
//     console.log('/');
//     display.value += '/';
// })

// butC.addEventListener('click', function(){
//     console.log('c');
//     display.value = null;
// })


/////////////// recuperer et ordonné toute les value a l'interieur des html collection

butTab = [];
for (i=0 ; i < but.length ; i++){
    butTab.push(but.item(i));
}
console.log(butTab);

butTab.forEach(function(element){
    console.log(element);
    element.addEventListener('click', function(){
        if (element.value >= 0 && element.value <=9){
            console.log(element.value)
            display.value += element.value;
            
        }else if (element.value == '+'){
            currentValue = display.value;
            console.log(currentValue);
            display.value = null;
            operation = '+';

        }else if (element.value == '/'){
            currentValue = display.value;
            console.log(currentValue);
            display.value = null;
            operation = '/';

        }else if (element.value == '-'){
            currentValue = display.value;
            console.log(currentValue);
            display.value = null;
            operation = '-';

        }else if (element.value == '*'){
            currentValue = display.value;
            console.log(currentValue);
            display.value = null;
            operation = '*';

        }else if (element.value == '='){
            newValue = display.value;
            console.log(newValue);
            console.log(currentValue);
            display.value = null;

            if (operation == '+'){
                display.value = parseFloat(currentValue) + parseFloat(newValue);
            }else if (operation == '/'){
                display.value = parseFloat(currentValue) / parseFloat(newValue);
            }else if (operation == '-'){
                display.value = parseFloat(currentValue) - parseFloat(newValue);
            }else if (operation == '*'){
                display.value = parseFloat(currentValue) * parseFloat(newValue);
            }

        }else if (element.value == 'C'){
            console.log('c');
            display.value = null;
        }

    })
});


// function calculate(operator, num1, num2) {
//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         return num1 / num2;
//       default:
//         throw new Error("Invalid operator");
//     }
//   }
//   console.log(calculate("+", 5, 10)); // affiche 15
  