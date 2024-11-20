// Data
const products = {
    vapes_recargables: [
        { id: 1, name: "VAPE RECHARGEABLE XL", price: 35000, image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable de larga duración." },
        { id: 2, name: "VAPE RECHARGEABLE COMPACT", price: 28000, image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable compacto y portátil." },
        { id: 3, name: "VAPE RECHARGEABLE PRO", price: 42000, image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable con funciones avanzadas." },
    ],
    liquidos: [
        { id: 4, name: "LÍQUIDO PREMIUM FRUTAS DEL BOSQUE", price: 15000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor a frutas del bosque." },
        { id: 5, name: "LÍQUIDO MENTOLADO INTENSO", price: 14000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor mentolado intenso." },
        { id: 6, name: "LÍQUIDO TABACO SUAVE", price: 13000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor a tabaco suave." },
    ],
    vapes_desechables: [
        { id: 7, name: "IGNITE V8", price: 22000, image: "https://images.unsplash.com/photo-1561299593-7633f25dbd5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "El V8 Vape cuenta con nuevo hardware y tecnología para brindar el suave sabor y la experiencia del vapor. Solo inhala para encender tu dispositivo precargado. La batería de 500 mAh ofrece un sabor delicioso y jugoso con más de 800 PUFF, suficiente para mantenerte satisfecho todo el día y más." },
        { id: 8, name: "IGNITE V50", price: 28000, image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Dispositivo desechable no requiere rellenado. Batería interna recargable: 500 mAh (cable micro USB-C no incluido). Precargado, simplemente sopla el dispositivo para activarlo. 5% (50 mg/mL) de nicotina derivada del tabaco en el interior para una experiencia precisa estilo cigarrillo. Hasta 5000 caladas por desechable, equivalente aproximadamente a 7 paquetes de cigarrillos (20 cigarrillos por paquete). Compacto, ligero, portátil y discreto." },
        { id: 9, name: "IGNITE V150 PREMIUM", price: 35000, image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Alta Potencia: 5% de nicotina para una experiencia intensa. Duración Extrema: Hasta 15,000 caladas con batería de 650 mAh. Fácil de Usar: Activación y modos Eco/Boost con 3 inhalaciones rápidas. Sabor Excepcional: Mezcla de sandía y fruta del dragón. Listo para Usar: Precargado, portátil y elegante con diseño ergonómico. El compañero ideal para vapeo duradero, potente y sofisticado." },
        { id: 10, name: "LOST MARY MT15000 TURBO", price: 22000, image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Duración Extendida: Hasta 15,000 caladas con modo Suave o 7,500 en modo Turbo (22W). Potencia Personalizable: Doble bobina de malla para nubes densas o sesiones prolongadas. Tecnología Avanzada: Pantallas para monitorear batería y e-líquido. Especificaciones: Batería recargable de 600mAh (Tipo-C) y 5% de nicotina (50mg). Vapeo a medida con máxima duración y rendimiento." },
    ],
    resistencias: [
        { id: 11, name: "RESISTENCIA 0.15 OHM", price: 5000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 0.15 ohm para vapes recargables." },
        { id: 12, name: "RESISTENCIA 0.5 OHM", price: 4500, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 0.5 ohm para vapes recargables." },
        { id: 13, name: "RESISTENCIA 1.0 OHM", price: 4000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 1.0 ohm para vapes recargables." },
    ],
};

const bannerMessages = [
    "¡Nuevos sabores disponibles!",
    "Envíos a todo el país",
    "¡Ofertas especiales este fin de semana!"
];

const heroImages = [
    "img/hero.png",
    "img/hero1.png",
    "img/hero2.png"
];

// State
let cart = [];
let currentBanner = 0;
let currentHeroImage = 0;

// DOM Elements
const bannerMessageEl = document.getElementById('bannerMessage');
const cartItemCountEl = document.getElementById('cartItemCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const heroEl = document.getElementById('hero');
const productContainers = {
    vapes_recargables: document.getElementById('vapes_recargablesContainer'),
    liquidos: document.getElementById('liquidosContainer'),
    vapes_desechables: document.getElementById('vapes_desechablesContainer'),
    resistencias: document.getElementById('resistenciasContainer'),
};

// Functions
function updateBanner() {
    bannerMessageEl.textContent = bannerMessages[currentBanner];
    currentBanner = (currentBanner + 1) % bannerMessages.length;
}

function updateHero() {
    heroEl.innerHTML = `
        <img src="${heroImages[currentHeroImage]}" 
             alt="Vape Argentina - Descubre nuestra selección premium de vapes" 
             class="absolute top-0 left-0 w-full h-full object-cover"
             width="1920"
             height="1080"
             loading="${currentHeroImage === 0 ? 'eager' : 'lazy'}"
             decoding="async">
    `;
    currentHeroImage = (currentHeroImage + 1) % heroImages.length;
}

function renderProducts() {
    for (const [category, productList] of Object.entries(products)) {
        productContainers[category].innerHTML = productList.map(product => `
            <div class="product-card flex-shrink-0 w-64 bg-bg-dark rounded-lg shadow-md overflow-hidden">
                <div class="p-4">
                    <div class="relative mb-4 aspect-square">
                        <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full">
                    </div>
                    <h3 class="text-sm font-medium line-clamp-2 text-text-light">${product.name}</h3>
                    <p class="mt-2 text-lg font-bold text-text-light">$${product.price.toLocaleString()}</p>
                    <button class="w-full mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors" onclick="openProductModal(${product.id}, '${category}')">
                        Ver detalles
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function scrollProducts(category, amount) {
    productContainers[category].scrollBy({ left: amount, behavior: 'smooth' });
}

function openProductModal(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('productModalTitle');
    const modalContent = document.getElementById('productModalContent');

    modalTitle.textContent = product.name;
    modalContent.innerHTML = `
        <div class="grid gap-4 py-4">
            <div class="relative h-64 w-full">
                <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full">
            </div>
            <p class="text-text-light">${product.description}</p>
            <p class="text-lg font-bold text-text-light">$${product.price.toLocaleString()}</p>
            <div class="flex items-center justify-between">
                <label for="quantity" class="text-sm font-medium text-text-light">Cantidad:</label>
                <div class="flex items-center">
                    <button class="bg-gray-700 text-text-light px-2 py-1 rounded-l" onclick="updateQuantity(-1)">-</button>
                    <input id="quantity" type="number" class="w-16 text-center border-t border-b bg-gray-800 text-text-light" value="1" min="1">
                    <button class="bg-gray-700 text-text-light px-2 py-1 rounded-r" onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            <button class="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors" onclick="addToCart(${product.id}, '${category}')">
                Agregar al carrito
            </button>
        </div>
    `;

    document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newQuantity = parseInt(quantityInput.value) + change;
    if (newQuantity < 1) newQuantity = 1;
    quantityInput.value = newQuantity;
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    if (!product) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCartUI();
    closeProductModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartItemCountEl.textContent = totalItems;
    cartItemCountEl.classList.toggle('hidden', totalItems === 0);

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain">
                <div>
                    <p class="font-medium text-text-light">${item.name}</p>
                    <p class="text-sm text-gray-400">$${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
            </div>
            <button class="text-red-500 hover:text-red-700" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash h-4 w-4"></i>
            </button>
        </div>
    `).join('');

    cartTotalEl.textContent = totalPrice.toLocaleString();
}

function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    }).format(price);
}

function createWhatsAppMessage(formData) {
    let message = "🛒 *Nuevo Pedido - Vapes Shop Tucumán*\n\n";
    message += "*Datos del Cliente:*\n";
    message += `- Nombre: ${formData.get('nombre')} ${formData.get('apellido')}\n`;
    message += `- Email: ${formData.get('email')}\n`;
    message += `- Teléfono: ${formData.get('telefono')}\n`;
    message += `- Método de envío: ${formData.get('envio')}\n`;
    message += `- Método de pago: ${formData.get('pago')}\n\n`;
    
    message += "*Productos:*\n";
    cart.forEach(item => {
        message += `- ${item.name}\n`;
        message += `  Cantidad: ${item.quantity}\n`;
        message += `  Precio: ${formatPrice(item.price)}\n`;
        message += `  Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `*Total: ${formatPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}*`;
    
    return encodeURIComponent(message);
}

function updateAdvertisingBanner() {
    const advertisingBanner = document.getElementById('advertisingBanner');
    const advertisingMessage = document.getElementById('advertisingMessage');
    const currentHour = new Date().getHours();
    let message, backgroundImage;

    if (currentHour >= 6 && currentHour < 12) {
        message = "¡Oferta matutina! 15% de descuento en todos los vapes recargables";
        backgroundImage = "url('img/mañana.png')";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "¡Especial de la tarde! Compra un líquido y lleva el segundo a mitad de precio";
        backgroundImage = "url('img/tarde.png')";
    } else {
        message = "¡Oferta nocturna! Envío gratis en compras superiores a $5000";
        backgroundImage = "url('img/noche.png')";
    }

    advertisingMessage.textContent = message;
    advertisingBanner.style.backgroundImage = backgroundImage;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('closeBanner').addEventListener('click', () => {
        document.getElementById('topBanner').classList.add('hidden');
    });

    document.getElementById('mobileMenuButton').addEventListener('click', () => {
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.toggle('open');
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    document.getElementById('cartButton').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('hidden');
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('hidden');
    });

    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);

    document.getElementById('whatsappButton').addEventListener('click', () => {
        window.open('https://wa.me/5493816891534', '_blank');
    });

    document.getElementById('closeWhatsappNotification').addEventListener('click', () => {
        document.getElementById('whatsappNotification').classList.add('hidden');
    });

    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const whatsappMessage = createWhatsAppMessage(formData);
        window.open(`https://wa.me/5493816891534?text=${whatsappMessage}`, '_blank');
        document.getElementById('checkoutModal').classList.add('hidden');
        document.getElementById('cartModal').classList.add('hidden');
        cart = [];
        updateCartUI();
    });

    document.getElementById('checkoutButton').addEventListener('click', function() {
        document.getElementById('cartModal').classList.add('hidden');
        document.getElementById('checkoutModal').classList.remove('hidden');
    });

    document.getElementById('closeCheckoutModal').addEventListener('click', function() {
        document.getElementById('checkoutModal').classList.add('hidden');
    });

    updateBanner();
    setInterval(updateBanner, 5000);

    updateHero();
    setInterval(updateHero, 5000);

    renderProducts();

    updateAdvertisingBanner();
    setInterval(updateAdvertisingBanner, 3600000); // Update every hour

    setTimeout(() => {
        document.getElementById('whatsappNotification').classList.remove('hidden');
    }, 10000);

    // Remove preloader
    document.getElementById('preloader').style.display = 'none';

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('.menu-icon').classList.remove('open');
        }
    });

    // Close mobile menu when a menu item is clicked
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.add('hidden');
            document.querySelector('.menu-icon').classList.remove('open');
        });
    });
});

// Make necessary functions global
window.scrollProducts = scrollProducts;
window.openProductModal = openProductModal;
window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

console.log("Script loaded successfully!");