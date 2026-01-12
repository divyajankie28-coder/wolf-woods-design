const PASSWORD = "group32WOLF"; // CHANGE THIS

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-msg");

  if (input === PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect password";
    error.style.color = "red";
  }
}
