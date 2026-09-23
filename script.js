 /* =========================================================
   BAJRANG GENERAL STORE
   PAC GALI, ETAWAH, UTTAR PRADESH
   COMPLETE FRONTEND E-COMMERCE DEMO
   ========================================================= */


/* =========================================================
   BASIC PRODUCT DATA
   ========================================================= */

const productTemplates = [

    { name:"Aashirvaad Atta", category:"Atta & Rice", unit:"5 kg", price:285, oldPrice:320, emoji:"🌾" },
    { name:"Fortune Chakki Fresh Atta", category:"Atta & Rice", unit:"5 kg", price:275, oldPrice:305, emoji:"🌾" },
    { name:"India Gate Basmati Rice", category:"Atta & Rice", unit:"5 kg", price:520, oldPrice:580, emoji:"🍚" },
    { name:"Daawat Basmati Rice", category:"Atta & Rice", unit:"5 kg", price:490, oldPrice:550, emoji:"🍚" },
    { name:"Tata Sampann Toor Dal", category:"Dal & Pulses", unit:"1 kg", price:165, oldPrice:185, emoji:"🫘" },
    { name:"Tata Sampann Moong Dal", category:"Dal & Pulses", unit:"1 kg", price:155, oldPrice:175, emoji:"🫘" },
    { name:"Fortune Sunflower Oil", category:"Cooking Oil", unit:"1 L", price:145, oldPrice:165, emoji:"🫗" },
    { name:"Fortune Mustard Oil", category:"Cooking Oil", unit:"1 L", price:158, oldPrice:180, emoji:"🫗" },
    { name:"Everest Turmeric Powder", category:"Masala", unit:"100 g", price:32, oldPrice:38, emoji:"🟡" },
    { name:"Everest Red Chilli Powder", category:"Masala", unit:"100 g", price:42, oldPrice:48, emoji:"🌶️" },
    { name:"Parle-G Biscuits", category:"Biscuits", unit:"800 g", price:75, oldPrice:85, emoji:"🍪" },
    { name:"Britannia Good Day", category:"Biscuits", unit:"200 g", price:40, oldPrice:45, emoji:"🍪" },
    { name:"Lay's Classic Salted", category:"Snacks", unit:"50 g", price:20, oldPrice:20, emoji:"🥔" },
    { name:"Kurkure Masala Munch", category:"Snacks", unit:"90 g", price:30, oldPrice:35, emoji:"🥨" },
    { name:"Dairy Milk Chocolate", category:"Chocolates", unit:"110 g", price:95, oldPrice:110, emoji:"🍫" },
    { name:"KitKat Chocolate", category:"Chocolates", unit:"42 g", price:40, oldPrice:45, emoji:"🍫" },
    { name:"Tata Tea Gold", category:"Tea & Coffee", unit:"500 g", price:255, oldPrice:285, emoji:"🍵" },
    { name:"Bru Instant Coffee", category:"Tea & Coffee", unit:"100 g", price:145, oldPrice:165, emoji:"☕" },
    { name:"Coca-Cola", category:"Cold Drinks", unit:"750 ml", price:40, oldPrice:45, emoji:"🥤" },
    { name:"Sprite", category:"Cold Drinks", unit:"750 ml", price:40, oldPrice:45, emoji:"🥤" },
    { name:"Amul Taaza Milk", category:"Dairy", unit:"1 L", price:62, oldPrice:65, emoji:"🥛" },
    { name:"Amul Butter", category:"Dairy", unit:"100 g", price:58, oldPrice:62, emoji:"🧈" },
    { name:"Dove Bathing Soap", category:"Personal Care", unit:"100 g", price:52, oldPrice:60, emoji:"🧼" },
    { name:"Dove Shampoo", category:"Personal Care", unit:"180 ml", price:145, oldPrice:165, emoji:"🧴" },
    { name:"Colgate Strong Teeth", category:"Personal Care", unit:"200 g", price:105, oldPrice:120, emoji:"🪥" },
    { name:"Surf Excel Matic", category:"Cleaning", unit:"2 kg", price:330, oldPrice:365, emoji:"🧺" },
    { name:"Vim Dishwash Liquid", category:"Cleaning", unit:"500 ml", price:105, oldPrice:120, emoji:"🧽" },
    { name:"LED Bulb 9W", category:"Household", unit:"1 piece", price:85, oldPrice:100, emoji:"💡" },
    { name:"AA Battery Pack", category:"Household", unit:"4 pieces", price:65, oldPrice:75, emoji:"🔋" },
    { name:"Classmate Notebook", category:"Stationery", unit:"172 pages", price:55, oldPrice:65, emoji:"📓" },
    { name:"Cello Ball Pen Pack", category:"Stationery", unit:"5 pieces", price:45, oldPrice:55, emoji:"🖊️" },
    { name:"Camphor Tablets", category:"Pooja Items", unit:"50 g", price:45, oldPrice:55, emoji:"🪔" },
    { name:"Almonds", category:"Dry Fruits", unit:"250 g", price:220, oldPrice:250, emoji:"🥜" },
    { name:"Cashews", category:"Dry Fruits", unit:"250 g", price:250, oldPrice:280, emoji:"🥜" },
    { name:"Tata Salt", category:"Sugar & Salt", unit:"1 kg", price:28, oldPrice:32, emoji:"🧂" },
    { name:"Kissan Tomato Ketchup", category:"Sauces", unit:"500 g", price:105, oldPrice:120, emoji:"🍅" },
    { name:"Maggi 2-Minute Noodles", category:"Instant Food", unit:"280 g", price:70, oldPrice:80, emoji:"🍜" },
    { name:"Bisleri Mineral Water", category:"Beverages", unit:"1 L", price:20, oldPrice:20, emoji:"💧" }

];


/* =========================================================
   CATEGORY ICONS
   ========================================================= */

const categoryIcons = {

    "All": "🛍️",
    "Atta & Rice": "🌾",
    "Dal & Pulses": "🫘",
    "Cooking Oil": "🫗",
    "Masala": "🌶️",
    "Biscuits": "🍪",
    "Snacks": "🥨",
    "Chocolates": "🍫",
    "Tea & Coffee": "☕",
    "Cold Drinks": "🥤",
    "Dairy": "🥛",
    "Personal Care": "🧴",
    "Cleaning": "🧹",
    "Household": "🏠",
    "Stationery": "📚",
    "Pooja Items": "🪔",
    "Dry Fruits": "🥜",
    "Sugar & Salt": "🧂",
    "Sauces": "🍅",
    "Instant Food": "🍜",
    "Beverages": "💧"

};


/* =========================================================
   CREATE 500 PRODUCT INVENTORY
   ========================================================= */

const products = [];

let productNumber = 1;

productTemplates.forEach(product => {

    products.push({

        ...product,

        id: `BGS-${String(productNumber).padStart(3, "0")}`,

        rating: (
            4 +
            ((productNumber % 10) / 10)
        ).toFixed(1),

        stock: 10 + (productNumber % 50)

    });

    productNumber++;

});


const generatedNames = [

    "Premium Grocery Pack",
    "Family Grocery Pack",
    "Daily Needs Essential",
    "Fresh Choice Product",
    "Bajrang Special Pack",
    "Home Essential",
    "Smart Choice Pack",
    "Value Family Pack",
    "Premium Quality Item",
    "Daily Use Product",
    "Local Store Special",
    "Household Value Pack"

];


const categoryPool = Object.keys(categoryIcons)
    .filter(category => category !== "All");


const emojiPool = [

    "🛒",
    "📦",
    "🥫",
    "🍚",
    "🌾",
    "🧴",
    "🧹",
    "🍪",
    "🥤",
    "🥛",
    "🧼",
    "🍫",
    "🥨",
    "☕",
    "🫘",
    "🪔",
    "🥜",
    "🍜",
    "💧",
    "🏠"

];


while (products.length < 500) {

    const index = products.length;

    const category =
        categoryPool[
            index % categoryPool.length
        ];

    const price =
        25 +
        ((index * 17) % 475);

    const oldPrice =
        price +
        10 +
        ((index * 7) % 70);

    const name =
        generatedNames[
            index % generatedNames.length
        ];

    products.push({

        id:
            `BGS-${String(index + 1).padStart(3, "0")}`,

        name:
            `${name} ${index + 1}`,

        category,

        unit:
            index % 3 === 0
                ? "1 piece"
                : index % 3 === 1
                    ? "500 g"
                    : "1 kg",

        price,

        oldPrice,

        emoji:
            emojiPool[
                index % emojiPool.length
            ],

        rating:
            (
                4 +
                ((index % 10) / 10)
            ).toFixed(1),

        stock:
            10 +
            (index % 70)

    });

}


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let selectedCategory = "All";
let searchTerm = "";
let sortType = "default";

let cart =
    JSON.parse(
        localStorage.getItem("bgs_cart") || "[]"
    );


/* =========================================================
   CUSTOMER ACCOUNT SYSTEM
   FRONTEND DEMO - LOCAL STORAGE
   ========================================================= */

let users =
    JSON.parse(
        localStorage.getItem("bgs_users") || "[]"
    );

let currentUser =
    JSON.parse(
        localStorage.getItem("bgs_current_user") || "null"
    );


/* =========================================================
   DOM
   ========================================================= */

const $ = id =>
    document.getElementById(id);


const productsGrid = $("productsGrid");
const categoryList = $("categoryList");
const searchInput = $("searchInput");
const clearSearchBtn = $("clearSearchBtn");
const sortSelect = $("sortSelect");
const productResultText = $("productResultText");
const emptyProducts = $("emptyProducts");
const resetFiltersBtn = $("resetFiltersBtn");
const shopNowBtn = $("shopNowBtn");
const searchFocusBtn = $("searchFocusBtn");

const cartOpenBtn = $("cartOpenBtn");
const cartCloseBtn = $("cartCloseBtn");
const cartDrawer = $("cartDrawer");
const cartOverlay = $("cartOverlay");
const cartItems = $("cartItems");
const cartEmpty = $("cartEmpty");
const cartSummary = $("cartSummary");
const cartCount = $("cartCount");
const cartSubtotal = $("cartSubtotal");
const deliveryCharge = $("deliveryCharge");
const cartTotal = $("cartTotal");
const continueShoppingBtn = $("continueShoppingBtn");
const checkoutBtn = $("checkoutBtn");

const checkoutModal = $("checkoutModal");
const checkoutCloseBtn = $("checkoutCloseBtn");
const checkoutForm = $("checkoutForm");
const checkoutTotal = $("checkoutTotal");

const successModal = $("successModal");
const orderId = $("orderId");
const successCloseBtn = $("successCloseBtn");


/* =========================================================
   ACCOUNT DOM
   ========================================================= */

const authModal = $("authModal");
const authCloseBtn = $("authCloseBtn");
const loginForm = $("loginForm");
const signupForm = $("signupForm");

const loginEmailPhone = $("loginEmailPhone");
const loginPassword = $("loginPassword");

const signupName = $("signupName");
const signupPhone = $("signupPhone");
const signupEmail = $("signupEmail");
const signupPassword = $("signupPassword");
const signupConfirmPassword = $("signupConfirmPassword");
const signupAddress = $("signupAddress");

const accountBtn = $("accountBtn");
const logoutBtn = $("logoutBtn");

let cartRequestedAfterLogin = false;


/* =========================================================
   PRICE
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}


function calculateDiscount(price, oldPrice) {

    if (!oldPrice || oldPrice <= price) {
        return 0;
    }

    return Math.round(
        ((oldPrice - price) / oldPrice) * 100
    );

}


/* =========================================================
   PRODUCT IMAGE
   ========================================================= */

function createProductImage(product) {

    const safeName =
        product.name
            .replace(/&/g, "and")
            .replace(/</g, "")
            .replace(/>/g, "");

    const svg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="700"
            viewBox="0 0 700 700"
        >

            <defs>

                <linearGradient
                    id="background"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0%"
                        stop-color="#ecfdf5"
                    />

                    <stop
                        offset="55%"
                        stop-color="#d1fae5"
                    />

                    <stop
                        offset="100%"
                        stop-color="#fef3c7"
                    />

                </linearGradient>

                <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                >

                    <feDropShadow
                        dx="0"
                        dy="15"
                        stdDeviation="15"
                        flood-opacity=".18"
                    />

                </filter>

            </defs>

            <rect
                width="700"
                height="700"
                rx="40"
                fill="url(#background)"
            />

            <ellipse
                cx="350"
                cy="570"
                rx="190"
                ry="30"
                fill="#064e3b"
                opacity=".12"
            />

            <g filter="url(#shadow)">

                <rect
                    x="175"
                    y="145"
                    width="350"
                    height="330"
                    rx="35"
                    fill="#ffffff"
                />

                <rect
                    x="175"
                    y="145"
                    width="350"
                    height="70"
                    rx="35"
                    fill="#047857"
                />

                <rect
                    x="175"
                    y="180"
                    width="350"
                    height="35"
                    fill="#047857"
                />

            </g>

            <text
                x="350"
                y="195"
                text-anchor="middle"
                font-family="Arial"
                font-size="27"
                font-weight="900"
                fill="#ffffff"
            >
                BAJRANG
            </text>

            <text
                x="350"
                y="350"
                text-anchor="middle"
                font-size="150"
            >
                ${product.emoji}
            </text>

            <text
                x="350"
                y="430"
                text-anchor="middle"
                font-family="Arial"
                font-size="25"
                font-weight="800"
                fill="#064e3b"
            >
                ${safeName.substring(0, 26)}
            </text>

            <rect
                x="220"
                y="455"
                width="260"
                height="45"
                rx="22"
                fill="#f59e0b"
            />

            <text
                x="350"
                y="485"
                text-anchor="middle"
                font-family="Arial"
                font-size="19"
                font-weight="800"
                fill="#10231c"
            >
                GENERAL STORE
            </text>

            <text
                x="350"
                y="620"
                text-anchor="middle"
                font-family="Arial"
                font-size="20"
                font-weight="700"
                fill="#064e3b"
            >
                PAC Gali • Etawah
            </text>

        </svg>

    `;

    return `
        data:image/svg+xml;charset=UTF-8,
        ${encodeURIComponent(svg)}
    `;

}


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

    if (!categoryList) {
        return;
    }

    const categories = [
        "All",
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    categoryList.innerHTML =
        categories
            .map(category => {

                const active =
                    selectedCategory === category
                        ? "active"
                        : "";

                return `

                    <button
                        class="category-btn ${active}"
                        data-category="${category}"
                        type="button"
                    >

                        <span>
                            ${
                                categoryIcons[category] ||
                                "🛒"
                            }
                        </span>

                        <span>
                            ${category}
                        </span>

                    </button>

                `;

            })
            .join("");

}


/* =========================================================
   FILTER
   ========================================================= */

function getFilteredProducts() {

    let result = [...products];

    if (selectedCategory !== "All") {

        result =
            result.filter(
                product =>
                    product.category ===
                    selectedCategory
            );

    }

    if (searchTerm.trim()) {

        const search =
            searchTerm
                .trim()
                .toLowerCase();

        result =
            result.filter(
                product =>

                    product.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.unit
                        .toLowerCase()
                        .includes(search)

            );

    }

    if (sortType === "price-low") {

        result.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    else if (sortType === "price-high") {

        result.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    else if (sortType === "name") {

        result.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    return result;

}


/* =========================================================
   PRODUCT RENDER
   ========================================================= */

function renderProducts() {

    if (!productsGrid) {
        return;
    }

    const result =
        getFilteredProducts();

    if (productResultText) {

        productResultText.textContent =
            `${result.length} products found`;

    }

    if (result.length === 0) {

        productsGrid.innerHTML = "";

        if (emptyProducts) {
            emptyProducts.hidden = false;
        }

        return;

    }

    if (emptyProducts) {
        emptyProducts.hidden = true;
    }

    productsGrid.innerHTML =
        result.map(product => {

            const discount =
                calculateDiscount(
                    product.price,
                    product.oldPrice
                );

            const existing =
                cart.find(
                    item =>
                        item.id === product.id
                );

            return `

                <article
                    class="product-card"
                    data-product-id="${product.id}"
                >

                    <div
                        class="product-image"
                        data-view-product="${product.id}"
                    >

                        ${
                            discount > 0
                                ? `
                                    <span class="discount-badge">
                                        ${discount}% OFF
                                    </span>
                                `
                                : ""
                        }

                        <span class="product-category-badge">
                            ${product.category}
                        </span>

                        <img
                            src="${createProductImage(product)}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="product-info"
                        data-view-product="${product.id}"
                    >

                        <div class="product-category">
                            ${product.category}
                        </div>

                        <h3 class="product-name">
                            ${product.name}
                        </h3>

                        <div class="product-unit">
                            ${product.unit}
                        </div>

                        <div class="product-rating">
                            ★ ${product.rating}
                            <span>• Store Pick</span>
                        </div>

                        <div class="product-price-row">

                            <div class="product-price">

                                <strong class="current-price">
                                    ${formatPrice(product.price)}
                                </strong>

                                ${
                                    product.oldPrice > product.price
                                        ? `
                                            <span class="old-price">
                                                ${formatPrice(product.oldPrice)}
                                            </span>
                                        `
                                        : ""
                                }

                            </div>

                            <button
                                class="${
                                    existing
                                        ? "add-cart-btn added"
                                        : "add-cart-btn"
                                }"
                                data-add-product="${product.id}"
                                type="button"
                            >

                                ${
                                    existing
                                        ? "✓ Added"
                                        : "Add to Cart"
                                }

                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


/* =========================================================
   CART STORAGE
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "bgs_cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }

    const existing =
        cart.find(
            item => item.id === productId
        );

    if (existing) {

        if (existing.quantity < product.stock) {
            existing.quantity++;
        }

    }

    else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart();
    updateCart();
    renderProducts();

    openCart();

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );

    saveCart();
    updateCart();
    renderProducts();

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(productId, change) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === productId
        );

    if (!item) {
        return;
    }

    const product =
        products.find(
            p => p.id === productId
        );

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }

    if (
        product &&
        item.quantity > product.stock
    ) {

        item.quantity = product.stock;

    }

    saveCart();
    updateCart();

}


/* =========================================================
   CART PRODUCTS
   ========================================================= */

function getCartProducts() {

    return cart
        .map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return null;
            }

            return {
                ...product,
                quantity: item.quantity
            };

        })
        .filter(Boolean);

}


/* =========================================================
   TOTALS
   ========================================================= */

function calculateCartSubtotal() {

    return getCartProducts()
        .reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,

            0
        );

}


function calculateDelivery(subtotal) {

    if (subtotal <= 0) {
        return 0;
    }

    if (subtotal >= 499) {
        return 0;
    }

    return 30;

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const items =
        getCartProducts();

    const count =
        items.reduce(
            (total, item) =>
                total + item.quantity,

            0
        );

    const subtotal =
        calculateCartSubtotal();

    const delivery =
        calculateDelivery(subtotal);

    const total =
        subtotal + delivery;

    if (cartCount) {
        cartCount.textContent = count;
    }

    if (
        !cartItems ||
        !cartSummary ||
        !cartEmpty
    ) {
        return;
    }

    if (items.length === 0) {

        cartItems.innerHTML = "";

        cartEmpty.style.display = "flex";

        cartSummary.hidden = true;

        return;

    }

    cartEmpty.style.display = "none";

    cartSummary.hidden = false;

    cartItems.innerHTML =
        items.map(item => `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${createProductImage(item)}"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-price">
                        ${formatPrice(item.price)}
                    </div>

                    <div class="cart-item-controls">

                        <div class="quantity-controls">

                            <button
                                type="button"
                                data-cart-minus="${item.id}"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                data-cart-plus="${item.id}"
                            >
                                +
                            </button>

                        </div>

                        <button
                            type="button"
                            class="remove-item"
                            data-remove-cart="${item.id}"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </div>

        `).join("");

    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatPrice(subtotal);

    }

    if (deliveryCharge) {

        deliveryCharge.textContent =
            delivery === 0
                ? "FREE"
                : formatPrice(delivery);

    }

    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }

    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(total);

    }

}


/* =========================================================
   ACCOUNT STORAGE
   ========================================================= */

function saveUsers() {

    localStorage.setItem(
        "bgs_users",
        JSON.stringify(users)
    );

}


function saveCurrentUser() {

    if (currentUser) {

        localStorage.setItem(
            "bgs_current_user",
            JSON.stringify(currentUser)
        );

    }

    else {

        localStorage.removeItem(
            "bgs_current_user"
        );

    }

}


/* =========================================================
   AUTH MODAL
   ========================================================= */

function openAuthModal() {

    if (!authModal) {
        return;
    }

    authModal.classList.add("show");

    authModal.hidden = false;

    document.body.style.overflow = "hidden";

}


function closeAuthModal() {

    if (!authModal) {
        return;
    }

    authModal.classList.remove("show");

    authModal.hidden = true;

    document.body.style.overflow = "";

    cartRequestedAfterLogin = false;

}


/* =========================================================
   LOGIN
   ========================================================= */

function loginCustomer(event) {

    event.preventDefault();

    const loginValue =
        loginEmailPhone
            ? loginEmailPhone.value.trim().toLowerCase()
            : "";

    const password =
        loginPassword
            ? loginPassword.value
            : "";

    if (!loginValue || !password) {

        alert(
            "Please enter your email/phone and password."
        );

        return;

    }

    const user =
        users.find(
            item =>

                (
                    item.email &&
                    item.email.toLowerCase() ===
                    loginValue
                )

                ||

                (
                    item.phone &&
                    item.phone ===
                    loginValue
                )
        );

    if (!user || user.password !== password) {

        alert(
            "Invalid email/phone or password."
        );

        return;

    }

    currentUser = user;

    saveCurrentUser();

    updateAccountUI();

    closeAuthModal();

    if (cartRequestedAfterLogin) {

        cartRequestedAfterLogin = false;

        openCart();

    }

}


/* =========================================================
   SIGN UP
   ========================================================= */

function signupCustomer(event) {

    event.preventDefault();

    const name =
        signupName
            ? signupName.value.trim()
            : "";

    const phone =
        signupPhone
            ? signupPhone.value.trim()
            : "";

    const email =
        signupEmail
            ? signupEmail.value.trim().toLowerCase()
            : "";

    const password =
        signupPassword
            ? signupPassword.value
            : "";

    const confirmPassword =
        signupConfirmPassword
            ? signupConfirmPassword.value
            : "";

    const address =
        signupAddress
            ? signupAddress.value.trim()
            : "";

    if (
        !name ||
        !phone ||
        !email ||
        !password ||
        !confirmPassword ||
        !address
    ) {

        alert(
            "Please complete all signup details."
        );

        return;

    }

    if (!/^[6-9]\d{9}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        return;

    }

    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;

    }

    if (password !== confirmPassword) {

        alert(
            "Passwords do not match."
        );

        return;

    }

    const alreadyExists =
        users.some(
            user =>
                user.email === email ||
                user.phone === phone
        );

    if (alreadyExists) {

        alert(
            "An account with this email or phone already exists."
        );

        return;

    }

    const newUser = {

        id:
            `USER-${Date.now()}`,

        name,

        phone,

        email,

        password,

        address,

        createdAt:
            new Date().toISOString()

    };

    users.push(newUser);

    saveUsers();

    currentUser = newUser;

    saveCurrentUser();

    updateAccountUI();

    if (signupForm) {
        signupForm.reset();
    }

    closeAuthModal();

    if (cartRequestedAfterLogin) {

        cartRequestedAfterLogin = false;

        openCart();

    }

}


/* =========================================================
   ACCOUNT UI
   ========================================================= */

function updateAccountUI() {

    if (accountBtn) {

        if (currentUser) {

            accountBtn.textContent =
                `👤 ${currentUser.name}`;

            accountBtn.classList.add("logged-in");

        }

        else {

            accountBtn.textContent =
                "👤 Account";

            accountBtn.classList.remove("logged-in");

        }

    }

    if (logoutBtn) {

        logoutBtn.hidden =
            !currentUser;

    }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutCustomer() {

    currentUser = null;

    saveCurrentUser();

    updateAccountUI();

    closeCart();

}


/* =========================================================
   CART ACCESS
   ========================================================= */

function requestCartAccess() {

    if (!currentUser) {

        cartRequestedAfterLogin = true;

        openAuthModal();

        return;

    }

    openCart();

}


/* =========================================================
   CART OPEN / CLOSE
   ========================================================= */

function openCart() {

    if (!cartDrawer) {
        return;
    }

    cartDrawer.classList.add("active");

    if (cartOverlay) {

        cartOverlay.classList.add("active");

    }

    cartDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeCart() {

    if (!cartDrawer) {
        return;
    }

    cartDrawer.classList.remove("active");

    if (cartOverlay) {

        cartOverlay.classList.remove("active");

    }

    cartDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Please add products to cart first."
        );

        return;

    }

    if (!currentUser) {

        cartRequestedAfterLogin = true;

        closeCart();

        openAuthModal();

        return;

    }

    closeCart();

    if (checkoutModal) {

        checkoutModal.hidden = false;

    }

    if (checkoutTotal) {

        const subtotal =
            calculateCartSubtotal();

        const delivery =
            calculateDelivery(subtotal);

        checkoutTotal.textContent =
            formatPrice(
                subtotal + delivery
            );

    }

}


/* =========================================================
   CLOSE CHECKOUT
   ========================================================= */

function closeCheckout() {

    if (checkoutModal) {

        checkoutModal.hidden = true;

    }

}


/* =========================================================
   ORDER ID
   ========================================================= */

function generateOrderId() {

    return `BGS-${Date.now()
        .toString()
        .slice(-8)}`;

}


/* =========================================================
   PLACE ORDER
   ========================================================= */

function placeOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }

    if (!currentUser) {

        closeCheckout();

        openAuthModal();

        return;

    }

    const formData =
        new FormData(checkoutForm);

    const name =
        formData.get("customerName") ||
        currentUser.name;

    const phone =
        formData.get("customerPhone") ||
        currentUser.phone;

    const address =
        formData.get("customerAddress") ||
        currentUser.address;

    const payment =
        formData.get("paymentMethod");

    if (
        !name ||
        !phone ||
        !address ||
        !payment
    ) {

        alert(
            "Please complete all checkout details."
        );

        return;

    }

    const newOrderId =
        generateOrderId();

    const subtotal =
        calculateCartSubtotal();

    const delivery =
        calculateDelivery(subtotal);

    const order = {

        orderId: newOrderId,

        customer: {
            name,
            phone,
            email: currentUser.email,
            address
        },

        paymentMethod: payment,

        items: getCartProducts(),

        subtotal,

        delivery,

        total:
            subtotal + delivery,

        status: "Pending",

        createdAt:
            new Date().toISOString()

    };

    const previousOrders =
        JSON.parse(
            localStorage.getItem(
                "bgs_orders"
            ) || "[]"
        );

    previousOrders.push(order);

    localStorage.setItem(
        "bgs_orders",
        JSON.stringify(previousOrders)
    );

    if (orderId) {

        orderId.textContent =
            newOrderId;

    }

    cart = [];

    saveCart();
    updateCart();
    renderProducts();

    closeCheckout();

    if (checkoutForm) {
        checkoutForm.reset();
    }

    if (successModal) {

        successModal.hidden = false;

    }

}


/* =========================================================
   WHATSAPP CHECKOUT
   ========================================================= */

function checkoutViaWhatsApp() {

    const items =
        getCartProducts();

    if (items.length === 0) {

        alert(
            "Please add products to cart first."
        );

        return;

    }

    if (!currentUser) {

        cartRequestedAfterLogin = true;

        closeCart();

        openAuthModal();

        return;

    }

    const subtotal =
        calculateCartSubtotal();

    const delivery =
        calculateDelivery(subtotal);

    const total =
        subtotal + delivery;


    /* =====================================================
       STORE WHATSAPP NUMBER

       Example:
       919876543210

       Replace only this number.
       ===================================================== */

    const storeNumber =
        "91XXXXXXXXXX";


    let message =
        `Namaste Bajrang General Store,

Mujhe ye products order karne hain:

`;


    items.forEach(
        (item, index) => {

            message +=
                `${index + 1}. ${item.name} x ${item.quantity} = ${formatPrice(
                    item.price * item.quantity
                )}\n`;

        }
    );


    message +=
        `\nSubtotal: ${formatPrice(subtotal)}`;

    message +=
        `\nDelivery: ${
            delivery === 0
                ? "FREE"
                : formatPrice(delivery)
        }`;

    message +=
        `\nTotal: ${formatPrice(total)}`;

    message +=
        `\n\nCustomer Name: ${currentUser.name}`;

    message +=
        `\nPhone: ${currentUser.phone}`;

    message +=
        `\nEmail: ${currentUser.email}`;

    message +=
        `\nAddress: ${currentUser.address}`;


    const url =
        `https://wa.me/${storeNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   QUICK VIEW
   ========================================================= */

function openProductDetails(productId) {

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) {
        return;
    }

    const discount =
        calculateDiscount(
            product.price,
            product.oldPrice
        );

    const modal =
        document.createElement("div");

    modal.id =
        "quickViewModal";

    modal.innerHTML = `

        <div
            class="modal-content"
            style="
                position:relative;
                max-width:600px;
            "
        >

            <button
                type="button"
                id="quickViewClose"
                style="
                    position:absolute;
                    right:15px;
                    top:15px;
                    width:40px;
                    height:40px;
                    border:none;
                    border-radius:50%;
                    background:#064e3b;
                    color:white;
                    font-size:22px;
                    z-index:5;
                    cursor:pointer;
                "
            >
                ×
            </button>

            <img
                src="${createProductImage(product)}"
                alt="${product.name}"
                style="
                    width:100%;
                    max-height:350px;
                    object-fit:contain;
                    border-radius:18px;
                    background:#ecfdf5;
                "
            >

            <div style="padding-top:20px;">

                <div
                    style="
                        color:#059669;
                        font-size:13px;
                        font-weight:900;
                        text-transform:uppercase;
                    "
                >
                    ${product.category}
                </div>

                <h2
                    style="
                        margin:7px 0;
                        color:#10231c;
                    "
                >
                    ${product.name}
                </h2>

                <p
                    style="
                        color:#64748b;
                        margin-bottom:10px;
                    "
                >
                    Pack / Unit:
                    <strong>
                        ${product.unit}
                    </strong>
                </p>

                <p
                    style="
                        color:#d97706;
                        font-weight:800;
                    "
                >
                    ★ ${product.rating}
                </p>

                <div
                    style="
                        display:flex;
                        align-items:center;
                        gap:12px;
                        margin:15px 0;
                    "
                >

                    <strong
                        style="
                            color:#065f46;
                            font-size:28px;
                        "
                    >
                        ${formatPrice(product.price)}
                    </strong>

                    ${
                        product.oldPrice > product.price
                            ? `
                                <span
                                    style="
                                        color:#94a3b8;
                                        text-decoration:line-through;
                                    "
                                >
                                    ${formatPrice(product.oldPrice)}
                                </span>
                            `
                            : ""
                    }

                </div>

                <div
                    style="
                        padding:12px;
                        border-radius:12px;
                        background:#ecfdf5;
                        color:#065f46;
                        font-weight:800;
                    "
                >
                    ✓ In Stock
                    (${product.stock} available)
                </div>

                <button
                    type="button"
                    id="quickViewAdd"
                    data-id="${product.id}"
                    style="
                        width:100%;
                        margin-top:16px;
                        padding:15px;
                        border:none;
                        border-radius:12px;
                        color:white;
                        background:linear-gradient(
                            135deg,
                            #059669,
                            #064e3b
                        );
                        font-weight:900;
                        font-size:16px;
                        cursor:pointer;
                    "
                >
                    Add to Cart
                </button>

            </div>

        </div>

    `;

    modal.style.cssText = `

        position:fixed;
        inset:0;
        z-index:3000;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        background:rgba(2,44,34,.7);
        backdrop-filter:blur(6px);

    `;

    document.body.appendChild(modal);

    const close = () => {

        modal.remove();

        document.body.style.overflow = "";

    };


    modal
        .querySelector("#quickViewClose")
        .addEventListener(
            "click",
            close
        );


    modal
        .querySelector("#quickViewAdd")
        .addEventListener(
            "click",
            () => {

                addToCart(product.id);

                close();

            }
        );


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                close();
            }

        }
    );


    document.body.style.overflow = "hidden";

}


/* =========================================================
   CATEGORY EVENT
   ========================================================= */

if (categoryList) {

    categoryList.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-category]"
                );

            if (!button) {
                return;
            }

            selectedCategory =
                button.dataset.category;

            renderCategories();
            renderProducts();

        }
    );

}


/* =========================================================
   PRODUCT EVENT
   ========================================================= */

if (productsGrid) {

    productsGrid.addEventListener(
        "click",
        event => {

            const addButton =
                event.target.closest(
                    "[data-add-product]"
                );

            if (addButton) {

                addToCart(
                    addButton.dataset.addProduct
                );

                return;

            }

            const productArea =
                event.target.closest(
                    "[data-view-product]"
                );

            if (productArea) {

                openProductDetails(
                    productArea.dataset.viewProduct
                );

            }

        }
    );

}


/* =========================================================
   CART EVENT
   ========================================================= */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const plus =
                event.target.closest(
                    "[data-cart-plus]"
                );

            const minus =
                event.target.closest(
                    "[data-cart-minus]"
                );

            const remove =
                event.target.closest(
                    "[data-remove-cart]"
                );

            if (plus) {

                changeQuantity(
                    plus.dataset.cartPlus,
                    1
                );

                return;

            }

            if (minus) {

                changeQuantity(
                    minus.dataset.cartMinus,
                    -1
                );

                return;

            }

            if (remove) {

                removeFromCart(
                    remove.dataset.removeCart
                );

            }

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value;

            renderProducts();

        }
    );

}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

if (clearSearchBtn) {

    clearSearchBtn.addEventListener(
        "click",
        () => {

            if (searchInput) {
                searchInput.value = "";
            }

            searchTerm = "";

            renderProducts();

            if (searchInput) {
                searchInput.focus();
            }

        }
    );

}


/* =========================================================
   SORT
   ========================================================= */

if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        event => {

            sortType =
                event.target.value;

            renderProducts();

        }
    );

}


/* =========================================================
   RESET FILTERS
   ========================================================= */

if (resetFiltersBtn) {

    resetFiltersBtn.addEventListener(
        "click",
        () => {

            selectedCategory = "All";
            searchTerm = "";
            sortType = "default";

            if (searchInput) {
                searchInput.value = "";
            }

            if (sortSelect) {
                sortSelect.value = "default";
            }

            renderCategories();
            renderProducts();

        }
    );

}


/* =========================================================
   SHOP NOW
   ========================================================= */

if (shopNowBtn) {

    shopNowBtn.addEventListener(
        "click",
        () => {

            const section =
                $("productsSection");

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   SEARCH FOCUS
   ========================================================= */

if (searchFocusBtn) {

    searchFocusBtn.addEventListener(
        "click",
        () => {

            if (searchInput) {
                searchInput.focus();
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CART OPEN
   ========================================================= */

if (cartOpenBtn) {

    cartOpenBtn.addEventListener(
        "click",
        requestCartAccess
    );

}


/* =========================================================
   CART CLOSE
   ========================================================= */

if (cartCloseBtn) {

    cartCloseBtn.addEventListener(
        "click",
        closeCart
    );

}


/* =========================================================
   CART OVERLAY
   ========================================================= */

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


/* =========================================================
   CONTINUE SHOPPING
   ========================================================= */

if (continueShoppingBtn) {

    continueShoppingBtn.addEventListener(
        "click",
        closeCart
    );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        openCheckout
    );

}


/* =========================================================
   CHECKOUT CLOSE
   ========================================================= */

if (checkoutCloseBtn) {

    checkoutCloseBtn.addEventListener(
        "click",
        closeCheckout
    );

}


/* =========================================================
   CHECKOUT BACKGROUND
   ========================================================= */

if (checkoutModal) {

    checkoutModal.addEventListener(
        "click",
        event => {

            if (event.target === checkoutModal) {
                closeCheckout();
            }

        }
    );

}


/* =========================================================
   CHECKOUT FORM
   ========================================================= */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        placeOrder
    );

}


/* =========================================================
   WHATSAPP BUTTON
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const whatsappButton =
            event.target.closest(
                "[data-whatsapp-checkout]"
            );

        if (!whatsappButton) {
            return;
        }

        checkoutViaWhatsApp();

    }
);


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

if (accountBtn) {

    accountBtn.addEventListener(
        "click",
        () => {

            if (currentUser) {

                if (logoutBtn) {
                    logoutBtn.hidden =
                        !logoutBtn.hidden;
                }

            }

            else {

                openAuthModal();

            }

        }
    );

}


/* =========================================================
   LOGOUT BUTTON
   ========================================================= */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        logoutCustomer
    );

}


/* =========================================================
   AUTH CLOSE
   ========================================================= */

if (authCloseBtn) {

    authCloseBtn.addEventListener(
        "click",
        closeAuthModal
    );

}


/* =========================================================
   LOGIN FORM
   ========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        loginCustomer
    );

}


/* =========================================================
   SIGNUP FORM
   ========================================================= */

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        signupCustomer
    );

}


/* =========================================================
   AUTH BACKGROUND
   ========================================================= */

if (authModal) {

    authModal.addEventListener(
        "click",
        event => {

            if (event.target === authModal) {
                closeAuthModal();
            }

        }
    );

}


/* =========================================================
   SUCCESS CLOSE
   ========================================================= */

if (successCloseBtn) {

    successCloseBtn.addEventListener(
        "click",
        () => {

            if (successModal) {
                successModal.hidden = true;
            }

        }
    );

}


/* =========================================================
   SUCCESS BACKGROUND
   ========================================================= */

if (successModal) {

    successModal.addEventListener(
        "click",
        event => {

            if (event.target === successModal) {

                successModal.hidden = true;

            }

        }
    );

}


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeCart();
        closeCheckout();
        closeAuthModal();

        const quickView =
            $("quickViewModal");

        if (quickView) {
            quickView.remove();
        }

        if (successModal) {
            successModal.hidden = true;
        }

    }
);


/* =========================================================
   RIPPLE EFFECT
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }

        const ripple =
            document.createElement("span");

        ripple.className = "ripple";

        const rect =
            button.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.width =
            `${size}px`;

        ripple.style.height =
            `${size}px`;

        ripple.style.left =
            `${
                event.clientX -
                rect.left -
                size / 2
            }px`;

        ripple.style.top =
            `${
                event.clientY -
                rect.top -
                size / 2
            }px`;

        button.appendChild(ripple);

        setTimeout(
            () => ripple.remove(),
            600
        );

    }
);


/* =========================================================
   BACK TO TOP
   ========================================================= */

let backToTop =
    $("backToTop");


if (!backToTop) {

    backToTop =
        document.createElement("button");

    backToTop.id =
        "backToTop";

    backToTop.className =
        "back-to-top";

    backToTop.type =
        "button";

    backToTop.innerHTML =
        "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(
        backToTop
    );

}


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        }

        else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

renderCategories();

renderProducts();

updateCart();

updateAccountUI();


console.log(
    `Bajrang General Store: ${products.length} products loaded.`
);