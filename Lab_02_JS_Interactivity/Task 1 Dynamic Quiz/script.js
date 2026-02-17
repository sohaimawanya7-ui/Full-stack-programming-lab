const ans1 = "javascript";
const ans2 = "script";
const ans3 = "no";

function calculateScore() {
    let score = 0;

   
    const u1 = document.getElementById("q1").value.trim().toLowerCase();
    const u2 = document.getElementById("q2").value.trim().toLowerCase();
    const u3 = document.getElementById("q3").value.trim().toLowerCase();

    
    if (u1 === ans1) score++;
    if (u2 === ans2) score++;
    if (u3 === ans3) score++;

    displayResults(score);
}

function displayResults(score) {
    const scoreText = document.getElementById("score-text");
    const feedback = document.getElementById("feedback-msg");


    scoreText.innerText = "Your Score: " + score + "/3";

    
    if (score === 3) {
        feedback.innerText = "Perfect! You're a JS pro! 🚀";
        feedback.style.color = "green";
    } else if (score >= 1) {
        feedback.innerText = "Not bad! Keep practicing. 👍";
        feedback.style.color = "orange";
    } else {
        feedback.innerText = "Ouch. Time to study more! 📚";
        feedback.style.color = "red";
    }
}


function resetQuiz() {
   
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    
 
    document.getElementById("score-text").innerText = "";
    document.getElementById("feedback-msg").innerText = "";
}