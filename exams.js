// exam.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("examForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const correctAnswers = { q1: "SMTP", q2: "7", q3: "Router" };
    let score = 0;
    const total = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
      const sel = document.querySelector(`input[name="${q}"]:checked`);
      if (sel && sel.value === correctAnswers[q]) score++;
    }

    const percentage = ((score / total) * 100).toFixed(2) + "%";
    const status = score >= Math.ceil(total * 0.5) ? "Passed" : "Failed";
    const remarks = score === total ? "Excellent!" : (score >= total/2 ? "Good job." : "Needs improvement.");

    const result = {
      exam: "Computer Networks",
      date: new Date().toLocaleString(),
      score: `${score}/${total}`,
      percentage,
      status,
      remarks
    };

    // Save to localStorage under key "examResults"
    const prev = JSON.parse(localStorage.getItem("examResults")) || [];
    prev.push(result);
    localStorage.setItem("examResults", JSON.stringify(prev));

    // quick feedback then redirect
    alert(`You scored ${score}/${total} — ${status}`);
    window.location.href = "results.html";
  });
});

