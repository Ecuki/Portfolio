const turnOn = element => {
  element.style.display = "flex";
  (on = () => {
    if ((element.style.opacity += 0.01) < 1) {
      requestAnimationFrame(on);
    } else {
      element.style.opacity = 1;
    }
  })();
};

const fadeOut = element => {
  (fade = () => {
    if ((element.style.opacity -= 0.02) > 0) {
      requestAnimationFrame(fade);
    } else {
      element.style.display = "none";
    }
  })();
};
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector("#wrapper");
  const nav = document.querySelector(".nav");
  let counter = document.querySelector(".counter");
  const preloader = document.querySelector(".preloader");
  const preloaderMessage = document.querySelector(".preloader-message");
  let loader = document.querySelector(".loader");
  let actualSection = "section1";
  let count = 0;

  const counterFunction = setInterval(() => {
    if (count < 101) {
      counter.textContent = `${count}%`;
      loader.style.width = `${count}%`;

      count++;
    } else {
      clearInterval(counterFunction);
      fadeOut(preloader);
      setTimeout(() => {
        turnOn(preloaderMessage);
      }, 1000);

      setTimeout(() => {
        fadeOut(preloaderMessage);
        wrapper.style.visibility = "visible";
        nav.style.visibility = "visible";
      }, 3000);
      wrapper.addEventListener("wheel", e => {
        logScroll(e);
      });
    }
  }, Math.floor(Math.random() * 35) + 10);
});

let timeStamp = 0;
function logScroll(e) {
  if (e.timeStamp > timeStamp + 1000) {
    const sections = document.querySelectorAll(".section");
    for (let section of sections) {
      if (Math.abs(section.offsetTop - wrapper.scrollTop) < 2) {
        actualSection = section.id;
      }
    }
    if (actualSection) {
      const length = actualSection.toString().length;
      let id = actualSection.slice(length - 1);
      const delta = e.deltaY;

      if (delta > 0 && id < sections.length) {
        id = ++id;
        const section = document.querySelector(`#section${id}`);

        wrapper.scroll({
          top: section.offsetTop,

          behavior: "smooth"
        });
        timeStamp = e.timeStamp;
      } else if (delta < 0 && id > 0) {
        const section = document.querySelector(`#section${--id}`);
        section &&
          wrapper.scroll({
            top: section.offsetTop,

            behavior: "smooth"
          });
        timeStamp = e.timeStamp;
      } else {
        return;
      }
    }
  }

  document.addEventListener("resize", () => {
    const section = document.querySelector(`#${actualSection}`);

    wrapper.scroll({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
}
