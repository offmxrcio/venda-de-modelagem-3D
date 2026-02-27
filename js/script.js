const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;
const icon = document.querySelector(".theme-icon");

// Carregar tema salvo
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  icon.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});