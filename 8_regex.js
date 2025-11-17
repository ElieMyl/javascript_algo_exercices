// [Objectif] : Créer une fonction qui vérifie si un email est bon ou non
function emailChecker(email) {
    const regex = ... ;
    // [Documentation] Regex test method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    return regex.test(email);
}

let isValidEmail = emailChecker("johndoe@gmail.com"); // Essayer avec un bon email et un mauvais email
console.log(isValidEmail);
