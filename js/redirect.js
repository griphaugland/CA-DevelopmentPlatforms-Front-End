const searchParams = new URLSearchParams(window.location.search);
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  if (user.token) {
    window.location.href = "./home";
  } else {
    console.log("Token not valid");
    window.location.href = "./auth/login";
  }
} else {
  setTimeout(() => {
    window.location.href = "./auth/login";
  }, 1500);
  console.log("No user");
}

function getParameters() {}
