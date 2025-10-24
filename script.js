
const fadeElements = document.querySelectorAll(".card, .impact-box");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); 
const style = document.createElement("style");
style.textContent = `
  .card, .impact-box {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
  }
  .card.visible, .impact-box.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 20; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.width = p.style.height = Math.random() * 6 + 2 + "px";
  particlesContainer.appendChild(p);
}

const particleStyle = document.createElement("style");
particleStyle.textContent = `
  .particle {
    position: absolute;
    background: rgba(16, 185, 129, 0.3);
    border-radius: 50%;
    animation: floatParticle 8s ease-in-out infinite;
  }
  @keyframes floatParticle {
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(-20px); opacity: 1; }
  }
`;
document.head.appendChild(particleStyle);
