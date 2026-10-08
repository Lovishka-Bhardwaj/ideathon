// ==========================================
// APTIQUIZ - QUIZ SYSTEM
// ==========================================

// 20 QUESTIONS
// 12 Aptitude + 8 Logical Reasoning

const questions = [

    // =========================
    // APTITUDE - 12
    // =========================

    {
        category: "Aptitude",
        question: "What is 20% of 250?",
        options: ["40", "50", "60", "70"],
        answer: "50"
    },

    {
        category: "Aptitude",
        question: "A product is bought for ₹500 and sold for ₹600. What is the profit percentage?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "20%"
    },

    {
        category: "Aptitude",
        question: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },

    {
        category: "Aptitude",
        question: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },

    {
        category: "Aptitude",
        question: "A car travels 120 km in 2 hours. What is its average speed?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        answer: "60 km/h"
    },

    {
        category: "Aptitude",
        question: "What is the simple interest on ₹1000 at 10% per annum for 2 years?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        answer: "₹200"
    },

    {
        category: "Aptitude",
        question: "5 workers can complete a job in 12 days. How many days will 10 workers take?",
        options: ["4 days", "6 days", "8 days", "10 days"],
        answer: "6 days"
    },

    {
        category: "Aptitude",
        question: "A number is increased by 25% and becomes 100. What was the original number?",
        options: ["75", "80", "85", "90"],
        answer: "80"
    },

    {
        category: "Aptitude",
        question: "What is the probability of getting a Head when a fair coin is tossed once?",
        options: ["1/4", "1/2", "3/4", "1"],
        answer: "1/2"
    },

    {
        category: "Aptitude",
        question: "A father is 30 years old and his son is 10 years old. After how many years will the father be twice the son's age?",
        options: ["5 years", "10 years", "15 years", "20 years"],
        answer: "10 years"
    },

    {
        category: "Aptitude",
        question: "If 3 pens cost ₹45, how much will 8 pens cost?",
        options: ["₹100", "₹110", "₹120", "₹135"],
        answer: "₹120"
    },

    {
        category: "Aptitude",
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["24", "28", "32", "36"],
        answer: "32"
    },


    // =========================
    // LOGICAL REASONING - 8
    // =========================

    {
        category: "Logical Reasoning",
        question: "Find the next number: 3, 6, 12, 24, ?",
        options: ["36", "42", "48", "54"],
        answer: "48"
    },

    {
        category: "Logical Reasoning",
        question: "If CAT is coded as DBU, how is DOG coded?",
        options: ["EPH", "EOG", "FPH", "DPE"],
        answer: "EPH"
    },

    {
        category: "Logical Reasoning",
        question: "A person walks 10 metres north and then turns right and walks 10 metres. In which direction is the person from the starting point?",
        options: ["North", "South-East", "North-East", "South-West"],
        answer: "North-East"
    },

    {
        category: "Logical Reasoning",
        question: "Find the odd one out.",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot"
    },

    {
        category: "Logical Reasoning",
        question: "All roses are flowers. Which statement is definitely true?",
        options: [
            "All flowers are roses",
            "Some flowers are roses",
            "Roses are flowers",
            "No roses are flowers"
        ],
        answer: "Roses are flowers"
    },

    {
        category: "Logical Reasoning",
        question: "A is the brother of B. B is the sister of C. What is A's relation to C?",
        options: ["Brother", "Sister", "Father", "Uncle"],
        answer: "Brother"
    },

    {
        category: "Logical Reasoning",
        question: "Find the next number: 5, 10, 20, 40, ?",
        options: ["60", "70", "80", "90"],
        answer: "80"
    },

    {
        category: "Logical Reasoning",
        question: "Book is related to Reading in the same way as Fork is related to:",
        options: ["Writing", "Eating", "Cooking", "Cutting"],
        answer: "Eating"
    }

];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const participant =
        localStorage.getItem("aptiquizParticipant");


    // If user is not registered
    if (!participant) {

        window.location.href = "register.html";

        return;
    }


    // Load previous answers if available
    const savedAnswers =
        localStorage.getItem("aptiquizAnswers");


    if (savedAnswers) {

        try {

            const parsedAnswers =
                JSON.parse(savedAnswers);

            if (Array.isArray(parsedAnswers) &&
                parsedAnswers.length === questions.length) {

                userAnswers = parsedAnswers;

            }

        } catch (error) {

            console.log("Could not load saved answers.");

        }

    }


    // Show first/current question
    displayQuestion();

});


// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {

    const question =
        questions[currentQuestion];


    // Category
    document.getElementById("category").textContent =
        question.category;


    // Question number
    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    // Question badge
    document.getElementById("questionBadge").textContent =
        `Question ${currentQuestion + 1}`;


    // Question text
    document.getElementById("questionText").textContent =
        question.question;


    // Progress
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progress").style.width =
        progress + "%";


    // Options
    const optionsContainer =
        document.getElementById("optionsContainer");


    optionsContainer.innerHTML = "";


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.className = "option";


        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        // Previously selected answer
        if (userAnswers[currentQuestion] === option) {

            button.classList.add("selected");

        }


        button.addEventListener("click", function () {

            selectAnswer(option);

        });


        optionsContainer.appendChild(button);

    });


    // Previous button
    const previousBtn =
        document.getElementById("previousBtn");


    previousBtn.disabled =
        currentQuestion === 0;


    // Next / Submit button
    const nextBtn =
        document.getElementById("nextBtn");


    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent =
            "Submit Quiz ✓";

    } else {

        nextBtn.textContent =
            "Next →";

    }


    // Skip button
    const skipBtn =
        document.getElementById("skipBtn");


    if (userAnswers[currentQuestion] === null) {

        skipBtn.textContent = "Skip";

    } else {

        skipBtn.textContent = "Clear Answer";

    }


    // Navigator
    updateNavigator();

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(answer) {

    userAnswers[currentQuestion] =
        answer;


    saveAnswers();


    displayQuestion();

}


// ==========================================
// SAVE ANSWERS
// ==========================================

function saveAnswers() {

    localStorage.setItem(
        "aptiquizAnswers",
        JSON.stringify(userAnswers)
    );

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    // If last question
    if (currentQuestion === questions.length - 1) {

        finishQuiz();

        return;

    }


    currentQuestion++;

    displayQuestion();

}


// ==========================================
// PREVIOUS QUESTION
// ==========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

}


// ==========================================
// SKIP QUESTION
// ==========================================

function skipQuestion() {

    // If currently answered,
    // clear the answer
    if (userAnswers[currentQuestion] !== null) {

        userAnswers[currentQuestion] = null;

        saveAnswers();

        displayQuestion();

        return;

    }


    // Move to next question
    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();

        return;

    }


    // If last question,
    // find first unanswered question
    const firstUnanswered =
        userAnswers.findIndex(
            answer => answer === null
        );


    if (firstUnanswered !== -1) {

        currentQuestion =
            firstUnanswered;

        displayQuestion();

    } else {

        finishQuiz();

    }

}


// ==========================================
// QUESTION NAVIGATOR
// ==========================================

function updateNavigator() {

    const navigator =
        document.getElementById("questionNavigator");


    navigator.innerHTML = "";


    questions.forEach(function (_, index) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.textContent =
            index + 1;


        // Current
        if (index === currentQuestion) {

            button.classList.add("current");

        }


        // Answered
        if (userAnswers[index] !== null) {

            button.classList.add("answered");

        }


        // Click navigator
        button.addEventListener("click", function () {

            currentQuestion = index;

            displayQuestion();

        });


        navigator.appendChild(button);

    });

}


// ==========================================
// FINISH QUIZ
// ==========================================

function finishQuiz() {

    const skipped =
        userAnswers.filter(
            answer => answer === null
        ).length;


    let message =
        "Are you sure you want to submit the quiz?";


    if (skipped > 0) {

        message +=
            `\n\nYou have ${skipped} unanswered question(s).`;

    }


    const confirmed =
        confirm(message);


    if (!confirmed) {

        return;

    }


    let correct = 0;

    let wrong = 0;

    let aptitudeCorrect = 0;

    let logicCorrect = 0;


    questions.forEach(function (question, index) {

        const selectedAnswer =
            userAnswers[index];


        // Skipped
        if (selectedAnswer === null) {

            return;

        }


        // Correct
        if (selectedAnswer === question.answer) {

            correct++;


            if (question.category === "Aptitude") {

                aptitudeCorrect++;

            } else {

                logicCorrect++;

            }

        }

        // Wrong
        else {

            wrong++;

        }

    });


    const score = correct;


    const accuracy =
        Math.round(
            (correct / questions.length) * 100
        );


    const result = {

        score: score,

        total: questions.length,

        correct: correct,

        wrong: wrong,

        skipped: skipped,

        accuracy: accuracy,

        aptitudeCorrect: aptitudeCorrect,

        logicCorrect: logicCorrect,

        answers: userAnswers,

        completedAt:
            new Date().toISOString()

    };


    // Save final result
    localStorage.setItem(
        "aptiquizResult",
        JSON.stringify(result)
    );


    // Keep participant information
    // DO NOT REMOVE aptiquizParticipant


    // Go to result page
    window.location.href =
        "result.html";

}
document
    .getElementById("previousBtn")
    .addEventListener("click", previousQuestion);

document
    .getElementById("skipBtn")
    .addEventListener("click", skipQuestion);

document
    .getElementById("nextBtn")
    .addEventListener("click", nextQuestion);