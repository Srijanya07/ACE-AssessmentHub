document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email && password) {
     
            sessionStorage.setItem("loggedIn", "true");

            window.location.href = "index.html";
        } else {
            alert("Please fill in both fields.");
        }
    });
});



