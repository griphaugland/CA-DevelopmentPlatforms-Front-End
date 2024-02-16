import { url } from "./security.js";

async function getUsers(url, token) {
  const req = {
    email: email,
    password: password,
  };
  const response = await fetch(url + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
}
