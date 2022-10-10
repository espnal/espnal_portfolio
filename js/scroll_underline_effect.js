const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".options");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-li");
    if (li.classList.contains(current)) {
      li.classList.add("active-li");
    }
  });
});
