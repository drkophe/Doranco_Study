let but = document.getElementsByClassName('button');
let display = document.getElementById('result');

let currentValue = null;
let newValue = null;
let operation = null;

butTab = [];
for (i=0 ; i < but.length ; i++){
    butTab.push(but.item(i));
}

butTab.forEach(function(element){
    element.addEventListener('click', function(){
        if (element.value >= 0 && element.value <=9){
            display.value += element.value;

        }else if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*'){
            currentValue = display.value;
            display.value = null;
            operation = element.value;

        }else if (element.value == '='){
            newValue = display.value;
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
            display.value = null;
            currentValue = null;
            newValue = null;
            operation = null;
        }

    })
});
