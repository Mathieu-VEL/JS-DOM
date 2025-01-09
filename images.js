// const slides = document.querySelectorAll(".slide");
// const leftButton = document.querySelector(".left");
// const rightButton = document.querySelector(".right");
// let currentIndex = 0; // Indice de la diapositive active

// // Fonction pour mettre à jour l'affichage
// function updateSlides(newIndex) {
//   // Masquer l'ancienne diapositive
//   slides[currentIndex].classList.add("hidden");
//   // Afficher la nouvelle diapositive
//   slides[newIndex].classList.remove("hidden");
//   // Mettre à jour l'indice courant
//   currentIndex = newIndex;

//   // Désactiver les boutons si on atteint les limites
//   leftButton.disabled = currentIndex === 0;
//   rightButton.disabled = currentIndex === slides.length - 1;
// }

// // Initialiser l'état des boutons (désactiver "gauche" si au début)
// leftButton.disabled = currentIndex === 0;

// // Gestion du bouton gauche
// leftButton.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     updateSlides(currentIndex - 1);
//   }
// });

// // Gestion du bouton droit
// rightButton.addEventListener("click", () => {
//   if (currentIndex < slides.length - 1) {
//     updateSlides(currentIndex + 1);
//   }
// });

// Sélection des éléments
const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentIndex = 0; // Indice de la diapositive active

// Fonction pour mettre à jour l'affichage des diapositives
function updateSlides(newIndex) {
  // Masquer la diapositive active actuelle
  slides[currentIndex].classList.add("hidden");
  slides[currentIndex].classList.remove("active");

  // Afficher la nouvelle diapositive
  slides[newIndex].classList.remove("hidden");
  slides[newIndex].classList.add("active");

  // Mettre à jour l'indice actif
  currentIndex = newIndex;
}

// Gestion du clic sur le bouton gauche
leftButton.addEventListener("click", () => {
  // Calcul de l'indice précédent (avec retour au dernier si nécessaire)
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides(newIndex);
});

// Gestion du clic sur le bouton droit
rightButton.addEventListener("click", () => {
  // Calcul de l'indice suivant (avec retour au premier si nécessaire)
  const newIndex = (currentIndex + 1) % slides.length;
  updateSlides(newIndex);
});