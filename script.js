const cartItems = [];

function addToCart(item, image) {
    if (!cartItems.some(cartItem => cartItem.name === item)) {
        cartItems.push({ name: item, image: image });
        updateCart();
    } else {
        alert(`${item} уже добавлен в корзину.`);
    }
}

function removeFromCart(item) {
    const index = cartItems.findIndex(cartItem => cartItem.name === item);
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    const cart = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(cartItem => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${cartItem.image}" alt="${cartItem.name}">
                <span>${cartItem.name}</span>
                <span class="remove-button" onclick="removeFromCart('${cartItem.name}')"><svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector"
                            d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                            fill="#575757" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg></span>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
}
