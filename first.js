document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("button");
    const emailInput = document.getElementById("userid");
    const passwordInput = document.getElementById("password");
    const messageDisplay = document.getElementById("message");
    const rememberMeCheckbox = document.getElementById("remember-me");
    const forgetPasswordText = document.querySelector(".click div:nth-child(2)");

    // Prefill email if "remember me" was checked previously
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }

    // Login click event
    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form reload

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Dummy credentials (you can modify or load from DB later)
        const validEmail = "mandeepsingh971159@gmail.com";
        const validPassword = "admin123";

        if (email === validEmail && password === validPassword) {
            messageDisplay.style.color = "green";
            messageDisplay.textContent = "Login successful!";

            if (rememberMeCheckbox.checked) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

            // Redirect or simulate login
            setTimeout(() => {
                alert("Redirecting to dashboard...");
                // location.href = "dashboard.html";
            }, 1000);
        } else {
            messageDisplay.style.color = "red";
            messageDisplay.textContent = "Invalid email or password.";
        }
    });

    // Forget password logic
    forgetPasswordText.style.cursor = "pointer";
    forgetPasswordText.style.textDecoration = "underline";
    forgetPasswordText.addEventListener("click", () => {
        const email = prompt("Enter your registered email for password recovery:");
        if (email === "mandeepsingh971159@gmail.com") {
            alert("Password reset link has been sent to your email.");
        } else if (email) {
            alert("Email not found in our records.");
        }
    });
});