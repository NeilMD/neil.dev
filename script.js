const bc_link = "https://neilmd.github.io/CPRG-309_Final/";
const ns_link = "https://neilmd.github.io/CPRG_310_NEW_FINAL/";

const about = ["#bc_card", "#ns_card"];
const project = [
  "#exp_card",
  "#links_card",
  "#neil_card",
  "#tech_card",
  "#edu_card",
];

const nav = ["#all_nav", "#about_nav", "#project_nav"];

document.getElementById("bc_card").addEventListener("click", () => {
  window.open(bc_link, "_blank");
});

document.getElementById("ns_card").addEventListener("click", () => {
  window.open(ns_link, "_blank");
});

document.getElementById("about_nav").addEventListener("click", (el) => {
  clear();
  document.getElementById("about_nav").classList.add("active_nav");
  blur(about);
});

document.getElementById("project_nav").addEventListener("click", (el) => {
  clear();
  document.getElementById("project_nav").classList.add("active_nav");
  blur(project);
});

document.getElementById("all_nav").addEventListener("click", (el) => {
  clear();
  document.getElementById("all_nav").classList.add("active_nav");
  blur([]);
});

const clear = () => {
  nav.forEach((id) => {
    console.log(id);
    document.querySelector(id).classList.remove("active_nav");
  });
  project.concat(about).forEach((id) => {
    document.querySelector(id).classList.remove("inactive_card");
  });
};

const blur = (arrId) => {
  arrId.forEach((id) => {
    document.querySelector(id).classList.add("inactive_card");
  });
};
