// Accrion Accountants — shared behaviour

// Mobile navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.classList.remove("open");
      document.body.style.overflow = "";
    })
  );
}

// Reveal-on-scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Current year in footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
