
const quotes = [
  "Exams made simple, learning made smarter.",
  "Secure, reliable, and ready for every exam.",
  "Your path to mastery starts here.",
  "Knowledge is power—measure it with confidence."
];

let idx = 0;
const quoteEl = document.getElementById('quote');

function showNextQuote() {
  if (quoteEl) {
    quoteEl.textContent = quotes[idx];
    idx = (idx + 1) % quotes.length;
  }
}

showNextQuote();
setInterval(showNextQuote, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("loggedIn");  
            window.location.href = "login.html";    
        });
    }
});






