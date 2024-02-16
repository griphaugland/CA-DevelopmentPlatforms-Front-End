import "dotenv/config";
import jwt from "jsonwebtoken";

const token = localStorage.getItem("token");

if (token) {
  const verifiedToken = jwt.verify(token, process.env.TOKEN_HASH_KEY);
  if (verifiedToken) {
    window.location.href = "./home";
  } else {
    console.log("Token not valid, please log in again");
    window.location.href = "./auth/login";
  }
} else {
  setTimeout(() => {
    window.location.href = "./auth/login";
  }, 1500);
  console.log("No user");
}
