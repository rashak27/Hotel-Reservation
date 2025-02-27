const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Toggle between sign-in and sign-up
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function showNotification(message, color) {
  const notification = document.getElementById("notification");
  notification.innerText = message;
  notification.style.background = color;
  notification.style.display = "block";

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

document.querySelector(".sign-in-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Predefined credentials
  const validUsername = "user123";
  const validPassword = "pass123";

  // Get user input
  const usernameInput = document.querySelector(".sign-in-form input[type='text']").value.trim();
  const passwordInput = document.querySelector(".sign-in-form input[type='password']").value.trim();

  // Check login
  if (usernameInput === validUsername && passwordInput === validPassword) {
    showNotification("✅ Login Successful! Redirecting...", "#4CAF50"); // Green for success
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Redirect after success
    }, 2000);
  } else {
    showNotification("❌ Incorrect username or password. Try again.", "#ff4d4d"); // Red for error
  }
});


