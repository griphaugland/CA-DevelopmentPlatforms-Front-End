import { url } from "./security.js";

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
  console.log(data);
  localStorage.setItem("token", data.accessToken);
}

logIn("test@test.no", "test");
