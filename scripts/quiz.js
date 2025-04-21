// Define questions for HTML, CSS, and JavaScript quizzes
const htmlquiz = [
    { question: "What does HTML stand for?", option1: "Hyper Text Markup Language", option2: "Hyperlinks and Text Markup Language", option3: "Hyper Text Markup Link", answer: 1 },
    { question: "What is the correct HTML element for the largest heading?", option1: "h6", option2: "heading", option3: "h1", answer: 3 },
    { question: "What is the correct HTML element for inserting a line break?", option1: "break", option2: "br", option3: "lb", answer: 2 }
];

const cssquiz = [
    { question: "What does CSS stand for?", option1: "Cascading Style Sheets", option2: "Colorful Style Sheets", option3: "Computer Style Sheets", answer: 1 },
    { question: "Which HTML tag is used to define an internal style sheet?", option1: "style", option2: "css", option3: "script", answer: 1 },
    { question: "Which property is used to change the background color?", option1: "bgcolor", option2: "background-color", option3: "color", answer: 2 }
];

const jsquiz = [
    { question: "What does JS stand for?", option1: "JavaScript", option2: "JavaSource", option3: "JavaScriptSource", answer: 1 },
    { question: "Which symbol is used for comments in JavaScript?", option1: "//", option2: "#", option3: "!-- --", answer: 1 },
    { question: "Which event occurs when the user clicks on an HTML element?", option1: "onclick", option2: "onmouseover", option3: "onchange", answer: 1 }
];

// Get quiz ID from URL query string
const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');

// Select quiz based on ID
let quiz = [];
if (quizId === "html") {
    quiz = htmlquiz;
} else if (quizId === "css") {
    quiz = cssquiz;
} else if (quizId === "js") {
    quiz = jsquiz;
} else {
    console.error("Invalid quiz ID");
}

// Dynamically render quiz questions
const users = JSON.parse(localStorage.getItem("users")) || [];
const container = document.getElementById("quizContainer");

quiz.forEach((q, index) => {
    container.innerHTML += `
        <div class="question-block">
            <p>${index + 1}. ${q.question}</p>
            <label><input type="radio" name="q${index}" value="1"> ${q.option1}</label><br/>
            <label><input type="radio" name="q${index}" value="2"> ${q.option2}</label><br/>
            <label><input type="radio" name="q${index}" value="3"> ${q.option3}</label><br/>
        </div>
    `;
});

// Handle quiz submission
function submitQuiz() {
    let score = 0;

    // Calculate score
    quiz.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    // Display result
    document.getElementById("result").innerHTML = `<h1>You scored ${score} out of ${quiz.length}</h1>`;

    // Save score to user
    const email = sessionStorage.getItem("email");
    if (!email) {
        alert("Please log in to save your score.");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const updatedUsers = users.map(user => {
        if (user.email === email) {
            if (!user.scores) user.scores = {};
            if (!user.scores[quizId]) user.scores[quizId] = [];
            user.scores[quizId].push(score);
        }
        return user;
        
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
}

// Add event listener to submit button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", submitQuiz);
});
