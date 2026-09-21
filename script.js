document.addEventListener("DOMContentLoaded", () => {
  const outfitButtons = document.querySelectorAll("[data-outfit]");
  const avatar = document.querySelector(".avatar");

  if (!avatar) return;

  const setOutfit = (outfit) => {
    avatar.dataset.outfit = outfit;
    outfitButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.outfit === outfit);
    });

    const dressColors = {
      pink: "linear-gradient(180deg, #f8dfe6, #f7a9c9 40%, #f18dc4)",
      gold: "linear-gradient(180deg, #fff1bf, #e7c65d 45%, #d2a72f)",
      night: "linear-gradient(180deg, #1d2249, #4d3b72 50%, #6b5ab6)"
    };

    const dress = avatar.querySelector(".body");
    if (dress) {
      dress.style.background = dressColors[outfit] || dressColors.pink;
    }
  };

  outfitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setOutfit(button.dataset.outfit);
    });
  });

  const currentOutfit = avatar.dataset.outfit || "pink";
  setOutfit(currentOutfit);
});
