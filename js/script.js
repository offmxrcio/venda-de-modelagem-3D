const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;
const icon = document.querySelector(".theme-icon");

// =========================
// TEMA (Dark / Light)
// =========================

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


// =========================
// VERIFICAR SESSÃO (HOME LIVRE)
// =========================

document.addEventListener("DOMContentLoaded", async function () {
  const loginIcon = document.querySelector(".login-icon");

  try {
    const response = await fetch("http://localhost:3000/me", {
      credentials: "include"
    });

    // Se estiver logado
    if (response.ok) {
      const user = await response.json();

      // Atualiza ícone
      if (loginIcon) {
        loginIcon.innerHTML = `<i class="fa-solid fa-circle-user"></i>`;
      }

      // Mostra usuário logado
      const info = document.createElement("p");
      info.textContent = "Logado como: " + user.email;
      info.style.color = "green";
      info.style.textAlign = "center";
      info.style.marginTop = "10px";

      document.body.prepend(info);
    }

  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
  }
});