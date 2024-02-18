import { url } from "./security.mjs";
const feedback = document.getElementById("register-error");

async function register(
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
  if (response.status === 500) {
    feedback.innerText = "Something went wrong";
  }
  if (response.status === 400) {
    feedback.innerText = "Invalid input";
  }
  if (response.status === 200) {
    setTimeout(() => {
      window.location.href = "../login";
    }, 1500);
  }
  console.log(response);
  const data = await response.json();
  feedback.innerText = data.message;
}
const form = document.getElementById("register-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("register-email");
  const usernameInput = document.getElementById("register-username");
  const passwordInput = document.getElementById("register-password");
  const firstNameInput = document.getElementById("register-first_name");
  const lastNameInput = document.getElementById("register-last_name");
  const bioInput = document.getElementById("register-bio");
  const genderInput = document.getElementById("register-gender");
  const profilePictureInput = document.getElementById(
    "register-profile_picture_url"
  );

  let firstNameValue = firstNameInput.value;
  let lastNameValue = lastNameInput.value;
  let bioValue = bioInput.value;
  let genderValue = genderInput.value;
  let profilePictureValue = profilePictureInput.value;

  if (firstNameInput.value.length === 0) {
    firstNameValue = null;
  }
  if (lastNameInput.value.length === 0) {
    lastNameValue = null;
  }
  if (bioInput.value.length === 0) {
    bioValue = null;
  }
  if (genderInput.value.length === 0) {
    genderValue = null;
  }
  if (profilePictureInput.value.length === 0) {
    profilePictureValue = null;
  }
  let roleValue = "user";
  register(
    usernameInput.value,
    emailInput.value,
    passwordInput.value,
    firstNameValue,
    lastNameValue,
    bioValue,
    genderValue,
    profilePictureValue,
    roleValue
  );
});
