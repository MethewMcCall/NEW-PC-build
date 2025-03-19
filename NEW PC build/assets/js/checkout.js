document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");
    
    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const card = document.getElementById("card").value.trim();
        
        if (!name || !email || !address || !card) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Invalid email format.");
            return;
        }
        
        if (!validateCard(card)) {
            alert("Invalid card number.");
            return;
        }
        
        alert("Purchase completed successfully! (Placeholder - Implement real payment logic)");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function validateCard(card) {
        return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card);
    }
});
