// requestBudget.js
window.addEventListener("DOMContentLoaded", () => {
  // Checa se o usuário está logado
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn !== "true") {
    alert("❌ Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html"; // Redireciona para login
    return;
  }

  console.log("✅ Usuário logado! Pode acessar a página.");
});