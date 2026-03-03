document.addEventListener("DOMContentLoaded", () => {
  const loginIcon = document.getElementById("loginIcon");
  const loginCard = document.getElementById("loginCard");
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");

  // Mostra/esconde card
  loginIcon.addEventListener("click", () => {
    loginCard.style.display = loginCard.style.display === "block" ? "none" : "block";
  });

  // Checa login
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn === "true") {
    btnLogout.style.display = "block";
    btnLogin.style.display = "none";
  } else {
    btnLogout.style.display = "none";
    btnLogin.style.display = "block";
  }

  // Entrar → redireciona para login
  btnLogin.addEventListener("click", () => {
    window.location.href = "html/login.html";
  });

  // Sair → limpa login e redireciona
  btnLogout.addEventListener("click", async () => {
    try {
      await fetch("http://localhost:3000/logout", { credentials: "include" });
    } catch(e) {
      console.error(e);
    }
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
});