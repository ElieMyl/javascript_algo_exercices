const pourcentageURSSAF = 26;
let chiffreAffaire = 1500;

// [Objectif] : Afficher le résultat du chiffre d'affaire après déduction du pourcentage URSSAF
function chiffreAffaireApresDeductionURSSAF() {
    let chiffreAffaireApresDeductionURSSAF = chiffreAffaire * (100 - pourcentageURSSAF) / 100;

    return chiffreAffaireApresDeductionURSSAF;
}

let resultat = chiffreAffaireApresDeductionURSSAF();
console.log(resultat);