// Smooth scroll navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Active nav highlight
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    if (
      top >= sec.offsetTop - 200 &&
      top < sec.offsetTop + sec.offsetHeight
    ) {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`nav a[href="#${sec.id}"]`);
      if (active) active.classList.add("active");
    }
  });
});
