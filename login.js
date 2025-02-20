document.addEventListener("DOMContentLoaded", () => {
    function saveusercredentials(email,password) {
        const hashedpassword=btoa(password);
        localStorage.setItem(email,hashedpassword);
        alert("User cridentials saved.");
        window.location.href="register.html";

    }

    function authenticateuser(email,password) {
        const hashedpassword=btoa(password);
        const storedpassword=localStorage.getItem(email);

        if (storedpassword && storedpassword === hashedpassword){
            alert("Authentication successful.");
            window.location.href = 'home.html';
        } else {
            alert("Authentication failed.");
        }
    }
    const loginButton = document.querySelector(".signin-button");
    if (loginButton && loginButton.textContent.trim() === "Sign In") {
        loginButton.addEventListener("click", (event) => {
            event.preventDefault();
            const email = document.querySelector(".email").value;
            const password = document.querySelector(".password").value;
            authenticateuser(email, password);
        });
    }
    const registerButton = document.querySelector(".submit");
    if (registerButton && registerButton.textContent.trim() === "Register") {
        registerButton.addEventListener("click", (event) => {
            event.preventDefault();
            const email = document.querySelector(".email").value;
            const password = document.querySelector(".password").value;
            saveUserCredentials(email, password);
        });
    }
})