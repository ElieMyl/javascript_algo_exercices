// Déclaration de variables
let phrase = "L'herbe est plus verte";
let nombre = 42;
const PI = 3.14159265359;

// Affichage simple dans la console
console.log(phrase);

// Opérations mathématiques
let resultat = nombre - 2;

// Affichage avec concaténation moderne (template literals)
console.log(`La phrase secrète est "${phrase}", le résultat est ${resultat} et le nombre PI est de ${PI}.`);

// Définition d'une fonction pour réutiliser du code
// Cette fonction prend deux nombres en entrée et retourne leur multiplication
function multiplication(a, b) {
    return a * b;
}

// Utilisation de la fonction multiplication
let resultatMultiplication1 = multiplication(3, 4);
console.log(`Résultat de 3 x 4 = ${resultatMultiplication1}`);

let resultatMultiplication2 = multiplication(6, 98);
console.log(`Résultat de 6 x 98 = ${resultatMultiplication2}`);

// Exemple supplémentaire : vérifier si un nombre est pair ou impair
function estPair(nombre) {
    return nombre % 2 === 0;
}

console.log(`Le nombre ${nombre} est-il pair ? ${estPair(nombre)}`);

/*
En JavaScript, il existe plusieurs types de variables : integer, string, boolean et array. 
Contrairement à d'autres langages, nous n'avons pas besoin de déclarer explicitement le type d'une variable : JavaScript déduit automatiquement son type. 
On appelle cela l'inférence de type.

Tout en JavaScript est un objet. Une fois que JavaScript détecte le type d'une variable, celle-ci est traitée comme un objet correspondant. 
Cela nous permet d'utiliser directement les méthodes associées à chaque type.

Connaissez-vous la programmation orientée objet (POO) ? 
Une classe est une représentation abstraite d'une entité, tandis qu'un objet est une instance concrète de cette classe. 
Par exemple, nous faisons tous partie de la classe `Humain` : chacun d'entre nous est un objet créé à partir de cette classe.

Les classes possèdent des **propriétés** et des **méthodes** :
- Les propriétés définissent l'état ou les caractéristiques d'un objet (ex : `nom`, `dateDeNaissance`, ...).
- Les méthodes représentent les actions que l'objet peut effectuer (ex : `parler()`, `marcher()`, `réfléchir()`, ...).
*/
