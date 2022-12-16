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

const form = document.getElementById("form");

const username = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("message");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();

  // reset();
  // return false;
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

if (window.innerWidth < 768) {
  const mainUl = document.querySelectorAll(".main-ul li");

  mainUl.forEach((li) => {
    li.addEventListener("click", () => {
      aside_id.classList.remove("show");
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
