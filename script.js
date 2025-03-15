

AOS.init(
  {
      duration: 1200,
  }
);

window.addEventListener("scroll", function () {
  const navButton = document.getElementById("navigation-button");
  const triggerPoint = 2500; // Altere esse valor conforme necessário

  if (window.scrollY >= triggerPoint) {
      navButton.classList.add("desactive");
  } else {
      navButton.classList.remove("desactive");
  }
});
