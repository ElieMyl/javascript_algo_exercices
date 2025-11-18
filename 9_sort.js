const products = [
  "AquaFlex",
  "ThermoMax",
  "PowerFit",
  "SlimPack",
  "BioFresh",
  "ZenPad",
  "FlexGrip",
  "GlowStick"
];

// [Objectif] : Créer une fonction qui retourne un tableau trier dans l'ordre alphabétique de façon croissante
function alphabeticSorting(arrayOfProduct){
    // [Documentation] Array method sort : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return arrayOfProduct.sort();
}

let sortedProduct = alphabeticSorting(products);
console.log(sortedProduct);