function registerUser() {
    // Get and sanitize user input from registration form
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    // Validate that both email and password fields are filled
    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    // Get current list of users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

}



