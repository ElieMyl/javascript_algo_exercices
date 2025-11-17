// [Documentation] array : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
const goodNews = [
  "Une belle surprise t’attend dans les prochains jours.",
  "Tu vas rencontrer quelqu’un qui changera ta vision des choses.",
  "Un projet que tu as en tête depuis longtemps va enfin se concrétiser.",
  "La chance te sourira au moment où tu t’y attendras le moins.",
  "Un voyage inattendu t’apportera beaucoup de joie.",
  "Tu recevras bientôt une bonne nouvelle liée à ton travail.",
  "Une opportunité se présentera : saisis-la sans hésiter.",
  "Quelqu’un proche de toi va te montrer une grande reconnaissance.",
  "Ton intuition te guidera vers un choix très bénéfique.",
  "Une période de calme et de sérénité arrive pour toi."
];

// [Documentation] method length : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
const goodNewsSize = goodNews.length;
console.log("La taille du tableau goodNews est de " + goodNewsSize)

// [Objectif] : Retourner une phrase aléatoire du tableau goodNews
function getRandomGoodNews(){
  // [Documentation] method random : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let randomNumber = ... ;
  return goodNews[randomNumber];
}

let randomGoodNews = getRandomGoodNews();
console.log(randomGoodNews);