document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    
    const nav = document.querySelector("nav");
    nav.prepend(navToggle);
    
    navToggle.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });
    
    // Smooth scrolling for better UX
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Placeholder for theme toggle (future enhancement)
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙";
    themeToggle.classList.add("theme-toggle");
    nav.append(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
