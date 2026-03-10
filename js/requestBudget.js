/* =========================
   REGRA DE LOGIN
========================= */
window.addEventListener("DOMContentLoaded", () => {
  // Checa se o usuário está logado
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn !== "true") {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html"; // Redireciona para login
    return;
  }

  console.log("✅ Usuário logado! Pode acessar a página.");
});

/* =========================
   ENVIO DE ORÇAMENTO
========================= */
document.getElementById("budgetForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const detalhes = document.getElementById("details").value;

  const response = await fetch("http://localhost:3000/orcamentos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include", // ESSENCIAL para enviar a sessão
    body: JSON.stringify({ nome, email, detalhes })
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
  } else {
    alert(data.error);
  }
});