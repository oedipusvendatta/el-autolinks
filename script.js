// === Scroll Reveal Animation ===
const items = document.querySelectorAll('.feature-item');

function revealOnScroll() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// === Smooth Navigation (Optional) ===
document.querySelectorAll("nav a").forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
  })
);
