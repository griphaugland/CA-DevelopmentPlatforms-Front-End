if (!localStorage.getItem("token")) {
  console.log("Token not valid, please log in again");
  window.location.href = "../../";
}

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  logout.innerText = "Logging out...";
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.reload();
  }, 1500);
});
