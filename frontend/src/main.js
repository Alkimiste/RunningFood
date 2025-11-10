const recipes = [
  {
    name: "Salade Énergie",
    description: "Un boost de protéines et de fraîcheur.",
    details: "Poulet, quinoa, avocat, pousses d’épinards, sauce citronnée.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2"
  },
  {
    name: "Smoothie Vert",
    description: "Hydratant et revitalisant après le sport.",
    details: "Banane, épinard, kiwi, lait d’amande, miel.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e17d"
  },
  {
    name: "Pâtes du Coureur",
    description: "Riches en glucides pour la récupération.",
    details: "Pâtes complètes, tomates cerises, basilic, huile d’olive.",
    image: "https://images.unsplash.com/photo-1528731708534-816fe59f90c6"
  }
];

const container = document.getElementById("recipes");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const closePopup = document.getElementById("closePopup");

recipes.forEach((r) => {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.innerHTML = `
    <img src="${r.image}" alt="${r.name}">
    <div class="content">
      <h2>${r.name}</h2>
      <p>${r.description}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    popupTitle.textContent = r.name;
    popupDesc.textContent = r.details;
    popup.classList.remove("hidden");
  });

  container.appendChild(card);
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});