function validateLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation for username and password
    if (username.toLowerCase() === "admin" && password === "admin") {
        alert("Login successful!");
        // Redirect or perform other actions here
    } else {
        alert("Username or password incorrect. Please try again.");
    }
}

function forgotPassword() {
    alert("Forgot Password clicked!");
}

function createAccount() {
    alert("Create Account clicked!");
}
