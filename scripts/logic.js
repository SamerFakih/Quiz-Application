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





