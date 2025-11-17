const products = [
    {
        id: 1,
        name: "Clavier mécanique",
        price: 79.99,
        category: "Informatique",
        stock: 12
    },
    {
        id: 2,
        name: "Casque sans fil",
        price: 59.90,
        category: "Audio",
        stock: 25
    },
    {
        id: 3,
        name: "Lampe de bureau LED",
        price: 29.50,
        category: "Maison",
        stock: 40
    },
    {
        id: 4,
        name: "Sac à dos étanche",
        price: 45.00,
        category: "Accessoires",
        stock: 8
    },
    {
        id: 5,
        name: "Bouteille isotherme 1L",
        price: 19.99,
        category: "Sport",
        stock: 60
    }
];

// [Objectif] : Créer une fonction qui retourne le tableau filtré en fonction d'une recherche
function filterProduct(objectArray, search) {
    // [Documentation] filter method : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return ... ;
}

let filteredProducts = filterProduct(products, 'Clavier');
console.log(filteredProducts);