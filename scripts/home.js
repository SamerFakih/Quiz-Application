// Define quiz data array with title, ID, and image path
const quizTitle = [
    { title: "HTML", id: "html", image: "../image/html-file_2786969.png" },
    { title: "CSS", id: "CSS", image: "../image/css-document_8322479.png" },
    { title: "JavaScript", id: "JS", image: "../image/javascript_10809622.png" }
];

// Build dynamic HTML content for each quiz item
let content = "";
for (let i = 0; i < quizTitle.length; i++) {
    content += `
        <div class="quiz-item flex">
            <h2>${quizTitle[i].title}</h2>
            <img src=${quizTitle[i].image} alt="${quizTitle[i].title}" />
            <button class="start-quiz" id="${quizTitle[i].id}">Start Quiz</button>
        </div>
    `;
}

// Insert quiz items into the DOM after page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("card").innerHTML = content;

    // Add event listeners to start quiz buttons
    const quizButtons = document.querySelectorAll(".start-quiz");
    quizButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Redirect to quiz page with quiz ID in URL
            const quizId = button.id;
            window.location.href = `../quiz.html?id=${quizId}`;
        });
    });
});

