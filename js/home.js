if (localStorage.getItem("token")) {
  const verifiedToken = jwt.verify(
    localStorage.getItem("token"),
    process.env.TOKEN_HASH_KEY
  );
  console.log(verifiedToken);
  if (verifiedToken) {
    window.location.href = "../";
  } else {
    console.log("Token not valid, please log in again");
    window.location.href = "../../";
  }
} else {
  setTimeout(() => {
    window.location.href = "../../";
  }, 1500);
  console.log("No user");
}
