// register.js
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    message.textContent = "❌ Preencha todos os campos!";
    message.style.color = "red";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // importante se quiser já usar sessão
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = "✅ Usuário registrado com sucesso!";
      message.style.color = "green";

      // Redireciona para login após 2s
      setTimeout(() => {
        window.location.href = "../html/login.html"; // ajuste caminho
      }, 2000);
    } else {
      message.textContent = `❌ ${data.error}`;
      message.style.color = "red";
    }
  } catch (err) {
    message.textContent = "❌ Erro ao conectar com o servidor";
    message.style.color = "red";
    console.error(err);
  }
});