import { findById } from './utils.js';

function addToCart(product, quantitySelect) {
    let cart;
    let initialCart = localStorage.getItem('CART');
    
    // if there is anything already in the cart, parse the data from string format
    if (initialCart) {
        cart = JSON.parse(initialCart);
    // if nothing in cart, create and assign and empty array
    } else {
        cart = [];
    }

    let productsAlreadyInCart = findById(cart, product.id);

    if (!productsAlreadyInCart) {
        const initialItem = {
            id: product.id,
            quantity: Number(quantitySelect.value),
            price: product.price,
        };
        cart.push(initialItem);
    } else {
        productsAlreadyInCart.quantity = productsAlreadyInCart.quantity + Number(quantitySelect.value);
    }

    const newCart = JSON.stringify(cart);
    localStorage.setItem('CART', newCart);
}

function clearCart() {
    localStorage.removeItem('CART');
}

export { addToCart, clearCart };