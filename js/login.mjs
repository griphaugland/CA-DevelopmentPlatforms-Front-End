import { url } from "./security.mjs";
const feedback = document.getElementById("login-error");

async function logIn(email, password) {
  const req = {
    email: email,
    password: password,
  };
  const response = await fetch(url + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await response.json();
  feedback.innerText = data.message;
  if (response.status === 200) {
    localStorage.setItem("token", data.accessToken);
    setTimeout(() => {
      window.location.href = "../../home";
    }, 1500);
  }
}

const form = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn(emailInput.value, passwordInput.value);
});
