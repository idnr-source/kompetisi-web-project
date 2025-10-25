
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

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("shadow-md");
  else header.classList.remove("shadow-md");
});

const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  menuList.classList.toggle('flex');
  menuList.classList.toggle('flex-col');
  menuList.classList.toggle('bg-white');
  menuList.classList.toggle('absolute');
  menuList.classList.toggle('top-16');
  menuList.classList.toggle('left-0');
  menuList.classList.toggle('w-full');
  menuList.classList.toggle('p-4');
  menuList.classList.toggle('shadow-md');
});

function updateSensors() {
  document.getElementById("tempValue").textContent = (25 + Math.random() * 5).toFixed(1) + " °C";
  document.getElementById("humidityValue").textContent = (60 + Math.random() * 20).toFixed(0) + " %";
  document.getElementById("airValue").textContent = (50 + Math.random() * 30).toFixed(0) + " AQI";
}
setInterval(updateSensors, 2000);
updateSensors();

document.addEventListener("DOMContentLoaded", () => {
  const plants = document.querySelectorAll(".plant");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("grow");
      }
    });
  }, { threshold: 0.5 });

  plants.forEach(plant => observer.observe(plant));
});

let lastScrollTop = 0;
let scrollTimeout;
let plantOffset = 0;

window.addEventListener("scroll", () => {
  const container = document.getElementById("plantContainer");
  if (!container) return;

  const currentScroll = window.scrollY;
  const direction = currentScroll > lastScrollTop ? "down" : "up";

  if (direction === "down") {
    plantOffset -= 5; 
  } else {
    plantOffset += 5; 
  }

  plantOffset = Math.min(Math.max(plantOffset, -200), 200);
  container.style.transform = `translateX(${plantOffset}px)`;

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    container.style.transform = `translateX(${plantOffset}px)`;
  }, 300);
});
