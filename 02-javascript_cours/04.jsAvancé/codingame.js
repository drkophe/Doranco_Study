var tab = [5,8,9];
let ecart = 100000

tab.sort(function(a, b){ 
    return a - b;  
}); 

tab.forEach (function(value, index){
    console.log(value);
    console.log(tab[index+1]);

    if (value - tab[index+1] < ecart){
        ecart = value - tab[index+1];
    }else {
        
    }
})


console.log(tab);
console.log(ecart);