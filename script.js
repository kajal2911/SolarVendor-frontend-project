// 🚀 Simple Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // ज्या elements वर animation हवी त्यांना observe करा
  document.querySelectorAll(
    '.service-card, .project-card, .gallery-grid img, .about, .about-page'
  ).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s ease-out"; // smooth animation
    observer.observe(el);
  });
});
