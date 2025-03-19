document.addEventListener("DOMContentLoaded", () => {
    const loginBox = document.getElementById("login-box");
    const registerBox = document.getElementById("register-box");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    showRegister.addEventListener("click", () => {
        loginBox.classList.add("hidden");
        registerBox.classList.remove("hidden");
    });

    showLogin.addEventListener("click", () => {
        registerBox.classList.add("hidden");
        loginBox.classList.remove("hidden");
    });

    document.getElementById("register-button").addEventListener("click", () => {
        const username = document.getElementById("register-username").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        
        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.email === email)) {
            alert("Email already registered!");
            return;
        }
        
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        showLogin.click();
    });

    document.getElementById("login-button").addEventListener("click", () => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            alert("Login successful")
            window.location.href = "index.html";
        } else {
            alert("Invalid credentials!");
        }
    });
});