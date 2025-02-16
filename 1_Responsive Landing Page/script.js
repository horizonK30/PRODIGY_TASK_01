// Select the navbar
const navbar = document.querySelector(".navbar");

// Add an event listener to detect scrolling
window.addEventListener("scroll", () => {
  // Check if the page is scrolled more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

