const page = document.querySelector("main")?.dataset.page;
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.dataset.page === page) link.classList.add("active");
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

document.querySelector(".booking-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.innerHTML;
  button.innerHTML = '<i data-lucide="check"></i> Заявка отправлена';
  button.disabled = true;
  if (window.lucide) window.lucide.createIcons();
  setTimeout(() => {
    button.innerHTML = original;
    button.disabled = false;
    if (window.lucide) window.lucide.createIcons();
    event.currentTarget.reset();
  }, 2200);
});
