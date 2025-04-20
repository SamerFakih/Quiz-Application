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

    // Prevent duplicate registrations by checking if email is already used
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("This email is already registered.");
        return;
    }

    // Save new user to localStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

}



