const inf = document.querySelectorAll(".inf");
inf.forEach((ItemHeader) => {
  ItemHeader.addEventListener("click", (event) => {
    const ActiveItemHeader = document.querySelector(".inf.active-");
    const accordionItemBody = ItemHeader.nextElementSibling;
    if (ActiveItemHeader && ActiveItemHeader !== ItemHeader) {
      ActiveItemHeader.classList.toggle("active-");
      ActiveItemHeader.nextElementSibling.style.maxHeight = 0;
      ActiveItemHeader.nextElementSibling.style.borderTop = "none";
    }

    ItemHeader.classList.toggle("active-");
    // const accordionItemBody = ItemHeader.nextElementSibling;
    if (ItemHeader.classList.contains("active-")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.style.borderTop = "1px solid #ff8b00";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.borderTop = "none";
    }
  });
});

const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById("nav");
const aside_id = document.getElementById("aside-id");

icon.addEventListener("click", function () {
  icon.classList.toggle("active");
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  aside_id.classList.toggle("show");
});

const options = document.querySelectorAll(".options");

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.contains.classList("show")) {
      aside_id.classList.remove("show");
    }
  });
});

if (window.innerWidth < 800) {
  const mainUl = document.querySelectorAll(".main-ul li");

  mainUl.forEach((li) => {
    li.addEventListener("click", () => {
      aside_id.classList.remove("show");
      icon.classList.remove("active");
      icon1.classList.remove("a");
      icon2.classList.remove("c");
      icon3.classList.remove("b");
    });
  });
}

const skillLi = document.querySelectorAll(".skills li");
skillLi.forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    const beforeElement = window.getComputedStyle(skill, "::before");
    beforeElement.transform = "translateX(-10px);";
  });
});

const arrow = document.querySelector(".arrows");
arrow.addEventListener("click", () => {
  let pageHeight = window.innerHeight;
  window.scrollBy({
    top: pageHeight,
    left: 0,
    behaviour: "smooth",
  });
  // window.scrollBy(0, pageHeight);
});
