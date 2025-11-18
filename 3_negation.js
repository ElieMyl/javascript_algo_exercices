// [Info] Si valeur true mode light activé, si valeur false mode dark activé
let lightMode = true; 

// [Objectif] Créer une fonction qui permet de passer d'un mode à l'autre
function switchMode(){
    return !lightMode;
}

let result = switchMode();
console.log(result);