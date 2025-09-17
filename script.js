// Menú responsive
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
toggleBtn.classList.add("menu-toggle");
document.querySelector("header .nav").insertBefore(toggleBtn, nav);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Scroll reveal simple
const animados = document.querySelectorAll(".card, .team-card, .pack, blockquote");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  animados.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("active");
    }
  });
});

// Validación del formulario
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("input[type=email]");
  if (!email.value.includes("@")) {
    alert("Por favor ingresa un correo válido.");
    return;
  }
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto.");
  form.reset();
});

// Botón volver arriba
const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.classList.add("btn-top");
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none";
});
