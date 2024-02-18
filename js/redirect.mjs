const token = localStorage.getItem("token");
if (token) {
  window.location.href = "./home";
} else {
  setTimeout(() => {
    window.location.href = "./auth/login";
  }, 1500);
  console.log("No user");
}
