import { url } from "./security.js";

async function register(
  url,
  username,
  email,
  password,
  first_name,
  last_name,
  bio,
  gender,
  profile_picture_url,
  role
) {
  const req = {
    username: username,
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    bio: bio,
    gender: gender,
    profile_picture_url: profile_picture_url,
    role: role,
  };
  const response = await fetch(url + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await response.json();
  console.log(data);
}
