
import gsap from 'https://cdn.skypack.dev/gsap';

window.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo(
    "h1",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
  );
  gsap.fromTo(
    "p",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.4 }
  );
});
