// Data
const categories = [
    { id: 1, name: "VAPES RECARGABLES", image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", key: "vapes_recargables" },
    { id: 2, name: "LIQUIDOS", image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", key: "liquidos" },
    { id: 3, name: "VAPES DESECHABLES", image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", key: "vapes_desechables" },
    { id: 4, name: "RESISTENCIAS", image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", key: "resistencias" },
];

const products = {
    vapes_recargables: [
        { id: 1, name: "VAPE RECHARGEABLE XL", price: 35000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable de larga duración." },
        { id: 2, name: "VAPE RECHARGEABLE COMPACT", price: 28000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable compacto y portátil." },
        { id: 3, name: "VAPE RECHARGEABLE PRO", price: 42000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape recargable con funciones avanzadas." },
    ],
    liquidos: [
        { id: 4, name: "LÍQUIDO PREMIUM FRUTAS DEL BOSQUE", price: 15000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor a frutas del bosque." },
        { id: 5, name: "LÍQUIDO MENTOLADO INTENSO", price: 14000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor mentolado intenso." },
        { id: 6, name: "LÍQUIDO TABACO SUAVE", price: 13000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Líquido para vape con sabor a tabaco suave." },
    ],
    vapes_desechables: [
        { id: 7, name: "LOST MARY MIXER 30000-ORANGE STRAWBERRY", price: 25000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape desechable con sabor a naranja y fresa." },
        { id: 8, name: "GEEK BAR X 25,000 PUFFS - GRAPEFRUIT", price: 28000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape desechable con sabor a pomelo." },
        { id: 9, name: "LOST MARY MO 20,000 PRO MANGO TWIST", price: 22000, image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Vape desechable con sabor a mango." },
    ],
    resistencias: [
        { id: 10, name: "RESISTENCIA 0.15 OHM", price: 5000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 0.15 ohm para vapes recargables." },
        { id: 11, name: "RESISTENCIA 0.5 OHM", price: 4500, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 0.5 ohm para vapes recargables." },
        { id: 12, name: "RESISTENCIA 1.0 OHM", price: 4000, image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", description: "Resistencia de 1.0 ohm para vapes recargables." },
    ],
};

const bannerMessages = [
    "¡Nuevos sabores disponibles!",
    "Envíos a todo el país",
    "¡Ofertas especiales este fin de semana!"
];

const heroImages = [
    "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
];

const advertisingMessages = [
    { message: "Descubre nuestra amplia gama de productos", image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    { message: "Envíos a todo el país 🚚", image: "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
    { message: "¡Ofertas especiales este fin de semana!", image: "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
];

// State
let cart = [];
let currentBanner = 0;
let currentHeroImage = 0;
let currentAdvertising = 0;

// DOM Elements
const bannerMessageEl = document.getElementById('bannerMessage');
const cartItemCountEl = document.getElementById('cartItemCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const categoriesContainerEl = document.getElementById('categoriesContainer');
const heroEl = document.getElementById('hero');
const advertisingBannerEl = document.getElementById('advertisingBanner');
const advertisingMessageEl = document.getElementById('advertisingMessage');
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
    heroEl.style.backgroundImage = `url('${heroImages[currentHeroImage]}')`;
    heroEl.style.backgroundSize = 'cover';
    heroEl.style.backgroundPosition = 'center';
    currentHeroImage = (currentHeroImage + 1) % heroImages.length;
}

function updateAdvertising() {
    const currentAd = advertisingMessages[currentAdvertising];
    advertisingBannerEl.style.backgroundImage = `url('${currentAd.image}')`;
    advertisingMessageEl.textContent = currentAd.message;
    currentAdvertising = (currentAdvertising + 1) % advertisingMessages.length;
}

function renderCategories() {
    categoriesContainerEl.innerHTML = categories.map(category => `
        <div class="flex-shrink-0 w-64 mr-4 bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-4">
                <div class="relative mb-4 aspect-square">
                    <img src="${category.image}" alt="${category.name}" class="object-cover w-full h-full rounded-lg">
                </div>
                <h3 class="text-center text-lg font-medium">${category.name}</h3>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    for (const [category, productList] of Object.entries(products)) {
        productContainers[category].innerHTML = productList.map(product => `
            <div class="flex-shrink-0 w-64 mr-4 bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-4">
                    <div class="relative mb-4 aspect-square">
                        <img src="${product.image}" alt="${product.name}" class="object-contain w-full h-full">
                    </div>
                    <h3 class="text-sm font-medium line-clamp-2">${product.name}</h3>
                    <p class="mt-2 text-lg font-bold">$${product.price.toLocaleString()}</p>
                    <button class="w-full mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" onclick="openProductModal(${product.id}, '${category}')">
                        Ver detalles
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function scrollCategories(amount) {
    categoriesContainerEl.scrollBy({ left: amount, behavior: 'smooth' });
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
            <p class="text-gray-600">${product.description}</p>
            <p class="text-lg font-bold">$${product.price.toLocaleString()}</p>
            <div class="flex items-center justify-between">
                <label for="quantity" class="text-sm font-medium">Cantidad:</label>
                <div class="flex items-center">
                    <button class="bg-gray-200 px-2 py-1 rounded-l" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <input id="quantity" type="number" class="w-16 text-center border-t border-b" value="1" min="1">
                    <button class="bg-gray-200 px-2 py-1 rounded-r" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            </div>
            <button class="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" onclick="addToCart(${product.id}, '${category}')">
                Agregar al carrito
            </button>
        </div>
    `;

    document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

function updateQuantity(productId, change) {
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
                    <p class="font-medium">${item.name}</p>
                    <p class="text-sm text-gray-500">$${item.price.toLoc

aleString()} x ${item.quantity}</p>
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

// Event Listeners
document.getElementById('closeBanner').addEventListener('click', () => {
    document.getElementById('topBanner').classList.add('hidden');
});

document.getElementById('mobileMenuButton').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('hidden');
});

document.getElementById('closeMobileMenu').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
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

// Initialization
updateBanner();
setInterval(updateBanner, 5000);

updateHero();
setInterval(updateHero, 5000);

updateAdvertising();
setInterval(updateAdvertising, 5000);

renderCategories();
renderProducts();

setTimeout(() => {
    document.getElementById('whatsappNotification').classList.remove('hidden');
}, 10000);

// Preloader
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});