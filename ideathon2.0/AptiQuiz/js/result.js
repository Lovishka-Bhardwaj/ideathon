// ==========================================
// LOAD RESULT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const resultData =
        localStorage.getItem("aptiquizResult");

    const participantData =
        localStorage.getItem("aptiquizParticipant");


    // No result found

    if (!resultData) {

        alert("No quiz result found.");

        window.location.href = "index.html";

        return;
    }


    const result =
        JSON.parse(resultData);


    const participant =
        participantData
            ? JSON.parse(participantData)
            : {};


    // ==========================================
    // BASIC RESULT
    // ==========================================

    document.getElementById("score").textContent =
        result.score;

    document.getElementById("correct").textContent =
        result.correct;

    document.getElementById("wrong").textContent =
        result.wrong;

    document.getElementById("skipped").textContent =
        result.skipped;

    document.getElementById("accuracy").textContent =
        result.accuracy + "%";


    // ==========================================
    // PARTICIPANT
    // ==========================================

    document.getElementById("participantName").textContent =
        `Great job, ${participant.fullName || "Participant"}!`;

    document.getElementById("name").textContent =
        participant.fullName || "-";

    document.getElementById("email").textContent =
        participant.email || "-";

    document.getElementById("college").textContent =
        participant.college || "-";

    document.getElementById("branch").textContent =
        participant.branch || "-";


    // ==========================================
    // PERFORMANCE
    // ==========================================

    calculatePerformance(result);


    // ==========================================
    // BADGE
    // ==========================================

    showBadge(result.score);

});


// ==========================================
// PERFORMANCE BREAKDOWN
// ==========================================

function calculatePerformance(result) {

    /*
        First 12 questions = Aptitude
        Last 8 questions = Logical Reasoning
    */

    let aptitudeCorrect = 0;

    let logicCorrect = 0;


    // We need the question data.
    // These answers correspond to the quiz questions.

    const correctAnswers = [

        // Aptitude
        "50",
        "20%",
        "20",
        "20",
        "60 km/h",
        "₹200",
        "6 days",
        "80",
        "1/2",
        "10 years",
        "₹120",
        "32",

        // Logical Reasoning
        "48",
        "EPH",
        "North-East",
        "Carrot",
        "Roses are flowers",
        "Brother",
        "80",
        "Eating"

    ];


    result.answers.forEach(function (answer, index) {

        if (
            answer !== null &&
            answer === correctAnswers[index]
        ) {

            if (index < 12) {

                aptitudeCorrect++;

            } else {

                logicCorrect++;

            }

        }

    });


    // Display

    document.getElementById("aptitudeScore").textContent =
        `${aptitudeCorrect} / 12`;

    document.getElementById("logicScore").textContent =
        `${logicCorrect} / 8`;


    // Progress bars

    const aptitudePercentage =
        (aptitudeCorrect / 12) * 100;

    const logicPercentage =
        (logicCorrect / 8) * 100;


    document.getElementById("aptitudeProgress")
        .style.width =
        aptitudePercentage + "%";


    document.getElementById("logicProgress")
        .style.width =
        logicPercentage + "%";

}


// ==========================================
// BADGE SYSTEM
// ==========================================

function showBadge(score) {

    const badge =
        document.getElementById("badge");


    if (score >= 18) {

        badge.textContent =
            "👑 Legendary Mind";

    }

    else if (score >= 15) {

        badge.textContent =
            "⚡ Aptitude Master";

    }

    else if (score >= 12) {

        badge.textContent =
            "🔥 Logic Warrior";

    }

    else if (score >= 8) {

        badge.textContent =
            "💎 Rising Star";

    }

    else {

        badge.textContent =
            "🎯 Comeback Badge";

    }

}


// ==========================================
// RETAKE QUIZ
// ==========================================

function retakeQuiz() {

    localStorage.removeItem(
        "aptiquizResult"
    );

    localStorage.removeItem(
        "aptiquizAnswers"
    );

    window.location.href =
        "quiz.html";

}


// ==========================================
// HOME
// ==========================================

function goHome() {

    window.location.href =
        "index.html";

}