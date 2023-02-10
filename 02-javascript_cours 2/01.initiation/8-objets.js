// --------------------------- OBJETS
// structure de données
var obj = {val : 'test', x: 5};
// acceder à la valeur d'une propriete d'un objet
// 1ere façon
console.log(obj.val);
console.log(obj.x);
// 2eme façon
console.log(obj['val']);
console.log(obj['x']);

// un objet : une strucutre de donnée qui contient plusieurs valeurs
// un objet : c'est une variable complexe
// un objet : une variable qui a des variables
// un objet : c'est type de donnée dans les langages qui implementent le paradigme orienté objet
var complexe = {
    tab1 : [2,3,4] ,
    tab2 : [24,434],
    tab3 : [23, 12]
}
var chaine = 'Rabhi Mohamed 18 dev web'

var personne = {
    nom: 'Rabhi',
    prenom : 'Mohamed',
    age: 18,
    profession: 'dev web'
}

// créer l'objet pays et donner lui des valeurs et des proprietes (5)
var franceObj = {
    nom : 'France',
    superficie: 543940,
    population: 67500000,
    capitale: 'Paris',
    langue: 'Français'
}
console.log(franceObj.capitale)
console.log(franceObj.nom)
console.log(franceObj.superficie)
console.log("Population par Km2(densité) : ", franceObj.population / franceObj.superficie)


// changer la valeur d'une propriete d'un objet
var obj = {val : 'test', x: 5};

obj.val = 'nouvelle valeur';
obj['x'] = 10;

obj = {valeur: 0}

// une propriete: c'est l'état d'un objet (description, qualité)
// une méthode : c'est le comportement d'un objet (action)
// une méthode : une fonction à l'intérieur d'un objet
var personne = {
    nom: 'Rabhi',
    prenom : 'Mohamed',
    age: 18,
    profession: 'dev web',
    saluer : function(){
        console.log('Salut tout le monde!!!');
    }
}
personne.saluer();