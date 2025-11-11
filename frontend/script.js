// Données des recettes
const recipes = [
  {
    title: "Smoothie Banane & Épinards",
    description: "Boostez votre énergie avec ce smoothie vert riche en vitamines.",
    image: "https://images.unsplash.com/photo-1590080878439-2cf79c8a4d92?auto=format&fit=crop&w=600&q=60",
    category: "breakfast"
  },
  {
    title: "Porridge Avoine & Fruits",
    description: "Petit déjeuner complet et délicieux pour les coureurs matinaux.",
    image: "https://images.unsplash.com/photo-1617196031122-89f1d78f1f07?auto=format&fit=crop&w=600&q=60",
    category: "breakfast"
  },
  {
    title: "Salade Poulet & Quinoa",
    description: "Repas sain et rapide pour récupérer après votre run.",
    image: "https://images.unsplash.com/photo-1604908177526-1313104d93a7?auto=format&fit=crop&w=600&q=60",
    category: "meals"
  },
  {
    title: "Pâtes Complètes & Légumes",
    description: "Un plat complet pour faire le plein d’énergie.",
    image: "https://images.unsplash.com/photo-1617196031120-f4f528e2a7d8?auto=format&fit=crop&w=600&q=60",
    category: "meals"
  }
];

const container = document.getElementById('recipe-container');

// Fonction pour afficher les cartes
function displayRecipes(filter = "all") {
  container.innerHTML = "";
  recipes.forEach(recipe => {
    if (filter === "all" || recipe.category === filter) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
      `;
      card.addEventListener("click", () => openModal(recipe));
      container.appendChild(card);
    }
  });
}

// Modale
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDescription');
const modalImg = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');

function openModal(recipe) {
  modal.style.display = "flex";
  modalTitle.textContent = recipe.title;
  modalDesc.textContent = recipe.description;
  modalImg.src = recipe.image;
}

closeModalBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; }

// Filtrer les recettes
document.getElementById('all').addEventListener('click', () => displayRecipes("all"));
document.getElementById('breakfast').addEventListener('click', () => displayRecipes("breakfast"));
document.getElementById('meals').addEventListener('click', () => displayRecipes("meals"));

// Affichage initial
displayRecipes();