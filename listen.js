// Sélectionne le bouton dans le document HTML
let button = document.querySelector("button");

// Sélectionne un élément ayant à la fois les classes "hidden" et "alert"
// Cela cible un élément spécifique avec ces deux classes (s'il existe)
let hiddenMessage = document.querySelector(".hidden, .alert");

// Ajoute un écouteur d'événement "click" au bouton
button.addEventListener("click", function () {
  // Lorsque le bouton est cliqué, supprime les classes "hidden" et "alert"
  // Cela permet de rendre visible l'élément qui avait ces classes
  hiddenMessage.classList.remove("hidden", "alert");
});

// fonction pour le onclick button
// function bouton(){
//     hiddenMessage.classList.remove("hidden");
// }
