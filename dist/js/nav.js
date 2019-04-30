const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav__links li");
  const navMask = document.querySelector(".nav__mask");

  const navTrigger = () => {
    // Toggle Nav
    nav.classList.toggle("nav__active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 +
          0.2}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    // For transpa BG at 0 scroll
    if (window.scrollY === 0) {
      nav.classList.toggle("nav__scrolled");
    }
  };

  burger.addEventListener("click", () => {
    navTrigger();
  });

  navMask.addEventListener("click", () => {
    navTrigger();
  });
};

// Transpa to Solid BG
window.onscroll = () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__burger");

  if (!burger.classList.contains("toggle")) {
    if (window.scrollY === 0) {
      nav.classList.remove("nav__scrolled");
    } else {
      nav.classList.add("nav__scrolled");
    }
  }
};

navSlide();
