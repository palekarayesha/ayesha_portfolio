const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  navLinks.style.display = open ? "flex" : "";
  navLinks.style.position = open ? "absolute" : "";
  navLinks.style.top = open ? "76px" : "";
  navLinks.style.left = open ? "0" : "";
  navLinks.style.right = open ? "0" : "";
  navLinks.style.padding = open ? "22px" : "";
  navLinks.style.background = open ? "rgba(245,244,239,.98)" : "";
  navLinks.style.flexDirection = open ? "column" : "";
  navLinks.style.borderBottom = open ? "1px solid #d8d7d0" : "";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    if (window.innerWidth <= 850) navLinks.style.display = "none";
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    navLinks.style = "";
    navLinks.classList.remove("mobile-open");
  }
});
