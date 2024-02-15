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
