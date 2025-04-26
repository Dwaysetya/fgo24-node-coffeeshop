let cart = [];

export function addToCart(nama, harga) {
    cart.push({ nama, harga });
}

export function getCart() {
    return cart;
}

export function clearCart() {
    cart = [];
}
