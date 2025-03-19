document.addEventListener("DOMContentLoaded", () => {
    const products = [
    { id: 1, category: 'cpu', name: 'Intel Core i9-12900K', price: 599.99, image: "assets/images/cpu1.jpg",brand: 'Intel', specs: '16 cores, 5.2GHz', compatibility: 'Intel', description:"High performance for Gaming & Professional work" },
    { id: 2, category: 'cpu', name: 'AMD Ryzen 9 7950X', price: 699.99, image: "assets/images/cpu4.jpg",brand: 'AMD', specs: '16 cores, 5.7GHz', compatibility: 'AMD', description:"High performance for Gaming & Professional work" },
    { id: 3, category: 'cpu', name: 'Intel Core i7-13700K', price: 429.99,image: "assets/images/cpu3.jpg", brand: 'Intel', specs: '16 cores, 5.4GHz', compatibility: 'Intel',description:"High performance for Gaming & Professional work" },
    { id: 4, category: 'cpu', name: 'AMD Ryzen 7 7800X3D', price: 479.99, image: "assets/images/cpu2.jpg",brand: 'AMD', specs: '8 cores, 5.0GHz', compatibility: 'AMD', description:"High performance for Gaming & Professional work" },
    { id: 5, category: 'cpu', name: 'Intel Core i5-13600K', price: 319.99, image: "assets/images/cpu5.jpg",brand: 'Intel', specs: '14 cores, 5.1GHz', compatibility: 'Intel', description:"High performance for Gaming & Professional work" },
    
    // GPUs
    { id: 6, category: 'gpu', name: 'NVIDIA RTX 4090', price: 1699.99,image: "assets/images/gpu1.jpg", brand: 'NVIDIA', specs: '24GB GDDR6X', compatibility: 'PCIe 4.0', description:"High performance for Gaming & Professional work" },
    { id: 7, category: 'gpu', name: 'AMD Radeon RX 7900 XTX', price: 1099.99, image: "assets/images/gpu2.jpg",brand: 'AMD', specs: '24GB GDDR6', compatibility: 'PCIe 4.0', description:"High performance for Gaming & Professional work" },
    { id: 8, category: 'gpu', name: 'NVIDIA RTX 4080', price: 1199.99, image: "assets/images/gpu3.jpg",brand: 'NVIDIA', specs: '16GB GDDR6X', compatibility: 'PCIe 4.0', description:"High performance for Gaming & Professional work"},
    { id: 9, category: 'gpu', name: 'AMD Radeon RX 7800 XT', price: 599.99,image: "assets/images/gpu4.jpg", brand: 'AMD', specs: '16GB GDDR6', compatibility: 'PCIe 4.0', description:"High performance for Gaming & Professional work" },
    { id: 10, category: 'gpu', name: 'NVIDIA RTX 4070', price: 599.99, image: "assets/images/gpu5.jpg",brand: 'NVIDIA', specs: '12GB GDDR6X', compatibility: 'PCIe 4.0', description:"High performance for Gaming & Professional work"},
    
    // RAM
    { id: 11, category: 'ram', name: 'Corsair Vengeance 32GB DDR5', price: 149.99,image: "assets/images/ram1.jpg", brand: 'Corsair', specs: '32GB (2x16GB) DDR5-6000', compatibility: 'DDR5',description:"High performance for Gaming & Professional work" },
    { id: 12, category: 'ram', name: 'G.Skill Trident Z5 32GB DDR5', price: 189.99,image: "assets/images/ram2.jpg", brand: 'G.Skill', specs: '32GB (2x16GB) DDR5-6400', compatibility: 'DDR5', description:"High performance for Gaming & Professional work" },
    { id: 13, category: 'ram', name: 'Kingston Fury 32GB DDR4', price: 109.99,image: "assets/images/ram3.jpg", brand: 'Kingston', specs: '32GB (2x16GB) DDR4-3600', compatibility: 'DDR4', description:"High performance for Gaming & Professional work" },
    { id: 14, category: 'ram', name: 'Crucial Ballistix 32GB DDR4', price: 119.99, image: "assets/images/ram4.jpg",brand: 'Crucial', specs: '32GB (2x16GB) DDR4-3200', compatibility: 'DDR4', sdescription:"High performance for Gaming & Professional work"},
    
    // Storage
    { id: 15, category: 'storage', name: 'Samsung 990 Pro 2TB NVMe SSD', price: 249.99, image: "assets/images/SSD1.jpg",brand: 'Samsung', specs: '2TB, PCIe 4.0, 7000MB/s', compatibility: 'M.2 NVMe', description:"High performance for Gaming & Professional work" },
    { id: 16, category: 'storage', name: 'WD Black SN850X 1TB NVMe SSD', price: 159.99, image: "assets/images/SSD2.jpg",brand: 'Western Digital', specs: '1TB, PCIe 4.0, 7300MB/s', compatibility: 'M.2 NVMe', description:"High performance for Gaming & Professional work" },
    { id: 17, category: 'storage', name: 'Seagate Barracuda 4TB HDD', price: 89.99, image: "assets/images/SSD3.jpg",brand: 'Seagate', specs: '4TB, 7200RPM', compatibility: 'SATA', description:"High performance for Gaming & Professional work" },
    { id: 18, category: 'storage', name: 'Crucial MX500 2TB SATA SSD', price: 159.99, image: "assets/images/SSD4.jpg",brand: 'Crucial', specs: '2TB, SATA, 560MB/s', compatibility: 'SATA', description:"High performance for Gaming & Professional work" },
    
    // Motherboards
    { id: 19, category: 'motherboard', name: 'ASUS ROG Z790 Hero', price: 629.99, image: "assets/images/mb1.jpg",brand: 'ASUS', specs: 'Z790, WiFi 6E, DDR5', compatibility: 'Intel', description:"High performance for Gaming & Professional work" },
    { id: 20, category: 'motherboard', name: 'MSI MEG X670E GODLIKE', price: 899.99, image: "assets/images/mb2.jpg",brand: 'MSI', specs: 'X670E, WiFi 6E, DDR5', compatibility: 'AMD', description:"High performance for Gaming & Professional work" },
    { id: 21, category: 'motherboard', name: 'Gigabyte B760 AORUS ELITE', price: 239.99,image: "assets/images/mb3.jpg", brand: 'Gigabyte', specs: 'B760, WiFi 6, DDR5', compatibility: 'Intel', description:"High performance for Gaming & Professional work" },
    { id: 22, category: 'motherboard', name: 'ASRock B650 PG Riptide', price: 199.99,image: "assets/images/mb4.jpg", brand: 'ASRock', specs: 'B650, PCIe 5.0, DDR5', compatibility: 'AMD', description:"High performance for Gaming & Professional work" },
    
    // Power Supplies
    { id: 23, category: 'powerSupply', name: 'Corsair RM1000X 1000W PSU', price: 219.99,image: "assets/images/ps1.jpg", brand: 'Corsair', specs: '1000W, Fully Modular, 80+ Gold', compatibility: 'ATX', description:"High performance for Gaming & Professional work" },
    { id: 24, category: 'powerSupply', name: 'EVGA SuperNOVA 850 G6', price: 159.99,image: "assets/images/ps2.jpg", brand: 'EVGA', specs: '850W, Fully Modular, 80+ Gold', compatibility: 'ATX', description:"High performance for Gaming & Professional work" },
    { id: 25, category: 'powerSupply', name: 'be quiet! Dark Power 12 1200W', price: 369.99,image: "assets/images/ps3.jpg", brand: 'be quiet!', specs: '1200W, Fully Modular, 80+ Titanium', compatibility: 'ATX', description:"High performance for Gaming & Professional work" },
    
    // Cooling
    { id: 26, category: 'cooling', name: 'NZXT Kraken X73 RGB AIO', price: 199.99,image: "assets/images/co1.jpg", brand: 'NZXT', specs: '360mm Radiator, RGB', compatibility: 'All CPUs', description:"High performance for Gaming & Professional work" },
    { id: 27, category: 'cooling', name: 'Noctua NH-D15', price: 109.99, image: "assets/images/co2.jpg",brand: 'Noctua', specs: 'Dual Tower, Dual Fan', compatibility: 'All CPUs', description:"High performance for Gaming & Professional work" },
    { id: 28, category: 'cooling', name: 'Corsair iCUE H150i ELITE LCD', price: 289.99,image: "assets/images/co3.jpg", brand: 'Corsair', specs: '360mm Radiator, LCD Display', compatibility: 'All CPUs', description:"High performance for Gaming & Professional work" },
    
    // Cases
    { id: 29, category: 'case', name: 'Lian Li PC-O11 Dynamic', price: 149.99,image: "assets/images/cs1.jpg", brand: 'Lian Li', specs: 'Mid Tower, Tempered Glass', compatibility: 'ATX, MicroATX, Mini-ITX', description:"High performance for Gaming & Professional work" },
    { id: 30, category: 'case', name: 'Corsair 5000D Airflow', price: 174.99, image: "assets/images/cs2.jpg",brand: 'Corsair', specs: 'Mid Tower, High Airflow', compatibility: 'ATX, MicroATX, Mini-ITX', description:"High performance for Gaming & Professional work" },
    { id: 31, category: 'case', name: 'Fractal Design Meshify 2', price: 159.99,image: "assets/images/cs3.jpg", brand: 'Fractal Design', specs: 'Mid Tower, Mesh Front', compatibility: 'ATX, MicroATX, Mini-ITX', description:"High performance for Gaming & Professional work" },
    { id: 32, category: 'case', name: 'NZXT H7 Flow', price: 129.99,image: "assets/images/cs4.jpg", brand: 'NZXT', specs: 'Mid Tower, Minimalist Design', compatibility: 'ATX, MicroATX, Mini-ITX', description:"High performance for Gaming & Professional work" }
       
    ];

    const productList = document.getElementById("product-list");
    const cartCount = document.createElement("span");
    cartCount.className = "cart-count";
    document.querySelector(".nav-links li:nth-child(3) a").appendChild(cartCount);

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0) || "";
    }

    function displayProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <div class="details">${product.description}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    productList.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            const productId = event.target.getAttribute("data-id");
            addToCart(productId, event.target);
        }
    });

    function addToCart(id, button) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = products.find(p => p.id == id);
        let existingProduct = cart.find(item => item.id == id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        button.textContent = "Added ✔";
        button.classList.add("added");
        button.disabled = true;
    }

    displayProducts();
    updateCartCount();
});