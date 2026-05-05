function enterMagic() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");
}

// Stars animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += 0.5;
    if (star.y > canvas.height) {
      star.y = 0;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();

// Wand coruse
document.addEventListener("mousemove", function (e) {
  let sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);
});

// Sorting Hat
function chooseHouse() {
  const houses = [
    "Gryffindor 🦁",
    "Slytherin 🐍",
    "Ravenclaw 🦅",
    "Hufflepuff 🦡",
  ];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  document.getElementById("houseResult").innerText =
    "You belong to " + randomHouse;
}

document.addEventListener("mousemove", (e) => {
  canvas.style.transform = `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
});

// Magical sound
function enterMagic() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("magicSound").play();
  enterMagic();
}
// Typewriter
function typeWriter(text, elementId) {
  let i = 0;
  let speed = 50;

  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
// Flash Effects
function flash() {
  let flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = 0;
  flash.style.left = 0;
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "white";
  flash.style.opacity = "0.8";
  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 100);
}
// INtro
// =========================
// CINEMATIC INTRO
// =========================

window.onload = function () {
  startIntro();
};

function startIntro() {
  const text = "✨ A Magical Journey Begins... ✨";
  typeIntro(text, "introText", 60, () => {
    setTimeout(endIntro, 2000);
  });

  playIntroSound();
}

// كتابة السينماتيك
function typeIntro(text, elementId, speed, callback) {
  let i = 0;
  let el = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      if (callback) callback();
    }
  }

  typing();
}

// نهاية المشهد
function endIntro() {
  const intro = document.getElementById("intro");
  intro.classList.add("fadeOut");

  setTimeout(() => {
    intro.style.display = "none";
  }, 2000);
}

// صوت السينماتيك
function playIntroSound() {
  let audio = new Audio("intro.mp3"); // حط صوت هنا
  audio.volume = 0.6;
  audio.play().catch(() => {});
}
// Light
// =========================
// LIGHTNING EFFECT ⚡
// =========================

function triggerLightning() {
  const lightning = document.getElementById("lightning");

  lightning.classList.add("lightning-flash");

  setTimeout(() => {
    lightning.classList.remove("lightning-flash");
  }, 300);
}

// تشغيل عشوائي
function startLightningLoop() {
  setInterval(() => {
    // احتمال 30% يحصل برق
    if (Math.random() > 0.7) {
      triggerLightning();
    }
  }, 2000);
}

// شغّل مع الانترُو
startLightningLoop();

function triggerLightning() {
  const lightning = document.getElementById("lightning");

  lightning.classList.add("lightning-flash");

  setTimeout(() => {
    lightning.classList.remove("lightning-flash");

    // فلاش خفيف بعده
    setTimeout(() => {
      lightning.classList.add("lightning-flash");
      setTimeout(() => {
        lightning.classList.remove("lightning-flash");
      }, 200);
    }, 100);
  }, 200);
}
