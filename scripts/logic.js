// Add DOMContentLoaded listener and event binding
document.addEventListener("DOMContentLoaded", function () {
    const welcomebtn = document.getElementById("welcomeloginbtn")
    if (welcomebtn) {
        welcomebtn.addEventListener("click", goToResult)}
    const loginbtn = document.getElementById("button")
    if (loginbtn) {
        loginbtn.addEventListener("click", checkLogin)
    }
});
// Implement smooth scroll behavior on welcome button click
function goToResult() {
    console.log("Welcome Login button clicked");
    document.getElementById("loginForm").scrollIntoView({ behavior: "smooth" });
}
//  Implement login check using localStorage
function checkLogin() {
    const emailInput = document.getElementById("logEmail").value.trim().toLowerCase();
    const passwordInput = document.getElementById("logPassword").value;

       // First, check for admin login
    if (emailInput === "adminn@quiz.com" && passwordInput === "admin1234") {
        location.href = "../dashboard.html";
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (validUser) {
        sessionStorage.setItem("email", emailInput);
        location.href = "../home.html";
    }else {
        alert("Incorrect email or password.");
    }
}
// save email in session storage







