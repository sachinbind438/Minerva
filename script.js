document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here you can add your authentication logic
    // For simplicity, let's just check if username and password match
    if (username === "student" && password === "password") {
      alert("Login successful!");
      // Redirect to another page after successful login
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  