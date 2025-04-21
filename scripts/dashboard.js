const userList = document.getElementById("userList");

// Function to display users and their quiz scores
function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    userList.innerHTML = ""; // Clear existing list

    users.forEach((user, index) => {
        const li = document.createElement("li");

        // Basic user info
        let userInfo = `${index + 1}. ${user.username} (${user.email})`;

        // If user has scores, show latest
        if (user.scores) {
            const htmlScore = user.scores.html?.join(", ") ?? "N/A";
            const cssScore = user.scores.css?.join(", ") ?? "N/A";
            const jsScore = user.scores.js?.join(", ") ?? "N/A";
            userInfo +=  `- Scores | HTML: ${htmlScore}, CSS: ${cssScore}, JS: ${jsScore};`
        } else {
            userInfo +=  `- No quiz scores yet`;
        }

        li.textContent = userInfo;
        userList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayUsers);