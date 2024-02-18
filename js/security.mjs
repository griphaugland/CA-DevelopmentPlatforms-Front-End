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
  const token = localStorage.getItem("token");
  if (token.length < 10) {
    window.location.href = "../../home";
  }
}

export const url =
  "https://ca-development-platforms-api-30d4082ca77e.herokuapp.com/";
