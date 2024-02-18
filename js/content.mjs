import { url } from "./security.mjs";
let users = [];
let addictions = [];

async function getUsers(url, token) {
  const response = await fetch(url + "users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  users = data;
}
async function getAddictions(url, token) {
  const response = await fetch(url + "addictions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  addictions = data;
}

await getUsers(url, localStorage.getItem("token"));
await getAddictions(url, localStorage.getItem("token"));

const rootUsers = document.querySelector("#home-content");
const rootAddictions = document.querySelector("#addictions-content");

rootUsers.innerHTML = "";
users.forEach((user) => {
  const div = document.createElement("div");
  div.classList.add("user");
  if (user.bio === null) {
    user.bio = "No bio yet";
  }
  if (user.name === null) {
    user.bio = "No bio yet";
  }
  if (user.profile_picture_url === null) {
    user.profile_picture_url = "https://via.placeholder.com/150";
  }
  if (user.username.length > 15) {
    user.username = user.username.substring(0, 13) + "...";
  }
  div.innerHTML = `
    <img src="${user.profile_picture_url}" alt="profile picture" />
    <h3>${user.username}</h3>
    <p>${user.bio}</p>
  `;
  rootUsers.appendChild(div);
});

rootAddictions.innerHTML = "";
addictions.forEach((addiction) => {
  let addictionIcon = "../../media/pencilicon.svg";
  const div = document.createElement("div");
  if (addiction.title === "item1") {
    addiction.title = "Røyk";
    addictionIcon = "../../media/roykicon.svg";
  }
  if (addiction.title === "Røyk") {
    addiction.title = "Røyk";
    addictionIcon = "../../media/roykicon.svg";
  }
  if (addiction.title === "item2") {
    addiction.title = "Snus";
    addictionIcon = "../../media/snusicon.svg";
  }
  if (addiction.title === "Snus") {
    addiction.title = "Snus";
    addictionIcon = "../../media/snusicon.svg";
  }
  if (addiction.title === "item3") {
    addiction.title = "Pengespill";
    addictionIcon = "../../media/gamblingicon.svg";
  }
  if (addiction.title === "Pengespill") {
    addiction.title = "Pengespill";
    addictionIcon = "../../media/gamblingicon.svg";
  }
  if (addiction.title === "item4") {
    addiction.title = "Rusmidler";
    addictionIcon = "../../media/rusmidler.svg";
  }
  if (addiction.title === "Rusmidler") {
    addiction.title = "Rusmidler";
    addictionIcon = "../../media/rusmidler.svg";
  }
  if (addiction.title === "item5") {
    addiction.title = "Alkohol";
    addictionIcon = "../../media/alcoholicon.svg";
  }
  if (addiction.title === "Alkohol") {
    addiction.title = "Alkohol";
    addictionIcon = "../../media/alcoholicon.svg";
  }
  if (addiction.title === "item6") {
    addiction.title = "Annet";
    addictionIcon = "../../media/pencilicon.svg";
  }
  if (addiction.title === "Annet") {
    addiction.title = "Annet";
    addictionIcon = "../../media/pencilicon.svg";
  }

  div.classList.add("addiction");
  div.innerHTML = `
    <img height="20px" width="20px" class="addictionicon" src="${addictionIcon}" alt="addiction picture" />
    <h3>${addiction.title}</h3>

  `;
  rootAddictions.appendChild(div);
});
if (addictions.length === 0) {
  rootAddictions.innerHTML =
    "<p class='header' style='margin-inline: 2rem;'>Antall startet (0)</p>";
}

const addAddictionButton = document.getElementById("add-addiction");
addAddictionButton.addEventListener("click", () => {
  openModal();
});

function openModal() {
  const modal = document.getElementById("addiction-modal");
  modal.style.display = "flex";
  const close = document.getElementById("close-modal");
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const addictionItem = document.getElementById("addiction-item");
const avhengighet = document.getElementById("avhengighet");
const description = document.getElementById("description");
const savings = document.getElementById("savings");

addictionItem.addEventListener("change", () => {
  let avhengighetValue = addictionItem.value;
  let descriptionValue = description.value;
  let savingsValue = savings.value;
  if (addictionItem.value === "item6") {
    document.querySelector(".avhengighet-annet").style.display = "flex";
    avhengighetValue = avhengighet.value;
  } else {
    document.querySelector(".avhengighet-annet").style.display = "none";
  }
});

const modalform = document.getElementById("modal-form");
modalform.addEventListener("submit", (e) => {
  let avhengighetValue = addictionItem.value;
  let descriptionValue = description.value;
  let savingsValue = savings.value;
  e.preventDefault();
  if (addictionItem.value === "item6") {
    avhengighetValue = avhengighet.value;
  }
  if (description.value.length === 0) {
    descriptionValue = null;
  }
  if (savings.value.length === 0) {
    savingsValue = null;
  }
  addAddiction(
    avhengighetValue,
    descriptionValue,
    savingsValue,
    localStorage.getItem("token")
  );
});

async function addAddiction(name, description, money_saved_per_month, token) {
  const req = {
    title: name,
    description: description,
    money_saved_per_month: parseInt(money_saved_per_month.trim(" ")),
  };
  const feedback = document.getElementById("addiction-feedback");
  const response = await fetch(url + "addiction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req),
  });
  const data = await response.json();
  console.log(data);
  feedback.innerText = data.message;
  feedback.style.fontSize = "2rem";
  feedback.style.color = "white";
  if (data.message == "Created new addiction item") {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}
