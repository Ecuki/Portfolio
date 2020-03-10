const urls = {
  titles: `https://www.youtube.com/watch?v=ShV54CpAeEI`,
  template: `https://ecuki.github.io/Travel_template/`,
  olaZuzia: `https://ola-zuzia.herokuapp.com/`,
  crazyBalls: `https://ecuki.github.io/CrazyBalls/`,
  randomPerson: `https://ecuki.github.io/RandomPeople/`
};
const activeElements = {
  titles: document.querySelector(".section__titles"),
  template: document.querySelector(".icon__template"),
  olaZuzia: document.getElementById("caption"),
  crazyBalls: document.getElementById("CrazyBalls"),
  randomPerson: document.getElementById("RandomPerson")
};
const navIcons = ["cat", "phone"];
const closes = document.querySelectorAll(".close");

document.addEventListener("DOMContentLoaded", () => {
  for (let url in urls) {
    activeElements[url].addEventListener("click", () => {
      openInNewTab(urls[url]);
    });
  }
});

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

navIcons.map(icon => {
  const element = document.querySelector(`.icon__${icon}`);
  const modal = document.getElementById(`${icon}Modal`);
  element.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closes.forEach(close => {
  close.addEventListener("click", e => {
    const modalName = e.target.attributes.name.value;
    const modal = document.getElementById(modalName);
    fadeOut(modal);
  });
});
