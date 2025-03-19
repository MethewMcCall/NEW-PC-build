document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-btn");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartUI() {
        cartContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = `<tr><td colspan="5" class="empty-cart">Your cart is empty</td></tr>`;
            totalPriceElement.textContent = "0.00";
            checkoutButton.style.display = "none";
            return;
        }

        cart.forEach(product => {
            total += product.price * product.quantity;
            const cartRow = document.createElement("tr");
            cartRow.classList.add("cart-item");
            cartRow.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" class="cart-img"> ${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>
                    <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                    <span class="quantity">${product.quantity}</span>
                    <button class="quantity-btn increase" data-id="${product.id}">+</button>
                </td>
                <td>$${(product.price * product.quantity).toFixed(2)}</td>
                <td><button class="remove-btn" data-id="${product.id}">✖</button></td>
            `;
            cartContainer.appendChild(cartRow);
        });

        totalPriceElement.textContent = total.toFixed(2);
        checkoutButton.style.display = "block";
    }

    function updateCart(id, action) {
        let product = cart.find(item => item.id == id);

        if (action === "increase") {
            product.quantity++;
        } else if (action === "decrease") {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                cart = cart.filter(item => item.id != id);
            }
        } else if (action === "remove") {
            cart = cart.filter(item => item.id != id);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }

    cartContainer.addEventListener("click", (event) => {
        const id = event.target.getAttribute("data-id");
        if (event.target.classList.contains("increase")) {
            updateCart(id, "increase");
        } else if (event.target.classList.contains("decrease")) {
            updateCart(id, "decrease");
        } else if (event.target.classList.contains("remove-btn")) {
            updateCart(id, "remove");
        }
    });

    updateCartUI();
});