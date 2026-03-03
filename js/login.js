const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  message.textContent = "";
  
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = "Login realizado com sucesso 🔥";
      message.style.color = "green";

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);

    } else {
      message.textContent = data.error;
      message.style.color = "red";
    }

  } catch (error) {
    message.textContent = "Erro ao conectar com o servidor";
    message.style.color = "red";
  }
});