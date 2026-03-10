// login.js
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    message.textContent = "Preencha todos os campos!";
    message.style.color = "red";
    message.style.fontWeight = "bold";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ESSENCIAL
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      // salva flag no localStorage para card de login/logout
      localStorage.setItem("loggedIn", "true");

      message.textContent = data.message;
      message.style.color = "green";
      message.style.fontWeight = "bold";

      setTimeout(() => {
        window.location.href = "../index.html"; // ajuste o caminho se necessário
      }, 1500);
    } else {
      message.textContent = `❌ ${data.error}`;
      message.style.color = "red";
      message.style.fontWeight = "bold";
    }
  } catch (error) {
    message.textContent = "Erro ao conectar com o servidor";
    message.style.color = "red";
    message.style.fontWeight = "bold";
    console.error(error);
  }
});