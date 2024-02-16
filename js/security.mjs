import "dotenv/config";

const toggleOptionalFieldsButton =
  document.getElementById("toggleFieldsButton");
if (toggleOptionalFieldsButton) {
  toggleOptionalFieldsButton.addEventListener("click", () => {
    var x = document.getElementById("optionalFields");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      toggleOptionalFieldsButton.innerText = "Gjem detaljer";
    } else {
      x.style.display = "none";
      toggleOptionalFieldsButton.innerText = "Legg til flere detaljer";
    }
  });
}

if (localStorage.getItem("token")) {
  const verifiedToken = jwt.verify(
    localStorage.getItem("token"),
    process.env.TOKEN_HASH_KEY
  );
  console.log(verifiedToken);
  if (verifiedToken) {
    window.location.href = "../../home";
  }
}

export const url =
  "https://ca-development-platforms-api-30d4082ca77e.herokuapp.com/";
