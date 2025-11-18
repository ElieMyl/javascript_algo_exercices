let actualDate = new Date();
let actualYear = actualDate.getFullYear();

// [Objectif] : Rediriger un utilisateur en fonction de son âge
function redirectUserDependsOnAge(userBirthdayYear) {
    
    let userAge = actualYear - userBirthdayYear ;

    console.log(`L'user a "${userAge}" ans`);
    
    // [Documentation] switch statement : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
    switch (true) {
    case userAge < 13:
        console.log("Rediriger vers https://www.disneyplus.com/");
        break;
    case userAge >= 13 && userAge < 18:
        console.log("Rediriger vers https://www.netflix.com/");
        break;
    default:
        console.log("Rediriger vers https://www.arte.com/");
    }
}


let redirection = redirectUserDependsOnAge(2020);
