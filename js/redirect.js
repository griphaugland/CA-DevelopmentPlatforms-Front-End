import "dotenv/config";
import jwt from "jsonwebtoken";

if (localStorage.getItem("token")) {
  const verifiedToken = jwt.verify(
    localStorage.getItem("token"),
    process.env.TOKEN_HASH_KEY
  );
  console.log(verifiedToken);
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
