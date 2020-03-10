const urlTitles = `https://www.youtube.com/watch?v=ShV54CpAeEI`;
const urlTemplate = `https://ecuki.github.io/Travel_template/`;
const herokuOlaZuzia = `https://ola-zuzia.herokuapp.com/`;
const titles = document.querySelector(".section__titles");
const template = document.querySelector(".icon__template");
const phone = document.querySelector(".icon__phone");
const cat = document.querySelector(".icon__cat");
const modal = document.getElementById("myModal");
const exit = document.querySelector(".close");
const caption = document.getElementById("caption");

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

titles.addEventListener("click", () => {
  openInNewTab(urlTitles);
});

caption.addEventListener("click", () => {
  openInNewTab(herokuOlaZuzia);
});

template.addEventListener("click", () => {
  openInNewTab(urlTemplate);
});

cat.addEventListener("click", () => {
  // turnOn(modal);
  modal.style.display = "flex";
});

exit.addEventListener("click", () => {
  fadeOut(modal);
});
