let prices = [300, 8, 9000, 10, 1000, 500, 20];

// [Objectif] : Créer une fonction qui retourne un tableau trier dans l'ordre numérique de façon croissante
function numericalSorting(numberArray) {
    // [Documentation] Sort array method (read parameters) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return numberArray.sort((a, b) => a - b);
}

let sortedPrices = numericalSorting(prices);
console.log(sortedPrices);