const bc_link = "https://neilmd.github.io/CPRG-309_Final/";
const ns_link = "https://neilmd.github.io/CPRG_310_NEW_FINAL/";

const about = ["bc_card", "ns_card"];
const project = [
  "exp_card",
  "links_card",
  "neil_card",
  "tech_card",
  "edu_card",
];
const nav = ["all_nav", "about_nav", "project_nav"];

// Click handlers for cards
document
  .getElementById("bc_card")
  .addEventListener("click", () => window.open(bc_link, "_blank"));
document
  .getElementById("ns_card")
  .addEventListener("click", () => window.open(ns_link, "_blank"));

// Click handlers for navigation
const navHandlers = {
  about_nav: about,
  project_nav: project,
  all_nav: [],
};

Object.keys(navHandlers).forEach((navItemId) => {
  const navItem = document.getElementById(navItemId);
  if (navItem) {
    navItem.addEventListener("click", () => handleNavClick(navItemId));
  }
});

const handleNavClick = (navItemId) => {
  clear();
  const activeNavItem = document.getElementById(navItemId);
  if (activeNavItem) {
    activeNavItem.classList.add("active_nav");
  }

  blur(navHandlers[navItemId]);
};

const clear = () => {
  nav.forEach((id) => {
    const navElement = document.getElementById(id);
    if (navElement) {
      navElement.classList.remove("active_nav");
    }
  });

  [...project, ...about].forEach((id) => {
    const cardElement = document.getElementById(id);
    console.log(id);
    if (cardElement) {
      cardElement.classList.remove("inactive_card");
    }
  });
};

const blur = (arrId) => {
  arrId.forEach((id) => {
    const cardElement = document.getElementById(id);
    if (cardElement) {
      cardElement.classList.add("inactive_card");
    }
  });
};
