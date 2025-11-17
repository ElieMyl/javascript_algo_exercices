let actualDate = new Date();
let actualYear = actualDate.getFullYear();

// [Objectif] : Rediriger un utilisateur en fonction de son âge
function redirectUserDependsOnAge(userBirthdayYear) {
    
    let userAge = actualYear - userBirthdayYear ;
    
    // [Documentation] switch statement : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
    switch (userBirthdayYear) {
    case ... :
        console.log("Redirect to https://www.disneyplus.com/");
        break;
    case ... :
        console.log("Redirect to https://www.netflix.com/");
        break;
    default:
        console.log("Redirect to https://www.arte.com/");
    }
}