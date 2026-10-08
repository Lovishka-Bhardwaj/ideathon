const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const participant = {

        fullName:
            document.getElementById("fullName").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        mobile:
            document.getElementById("mobile").value.trim(),

        college:
            document.getElementById("college").value.trim(),

        branch:
            document.getElementById("branch").value.trim(),

        year:
            document.getElementById("year").value.trim(),

        participantId:
            document.getElementById("participantId").value.trim(),

        registeredAt:
            new Date().toISOString()

    };

    /*
       Save participant information
       in browser localStorage.
    */

    localStorage.setItem(
        "aptiquizParticipant",
        JSON.stringify(participant)
    );

    // Clear any previous quiz data
    localStorage.removeItem("aptiquizAnswers");
    localStorage.removeItem("aptiquizResult");

    // Go to quiz
    window.location.href = "quiz.html";

});