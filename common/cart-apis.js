import { findById } from './utils.js';

function addToCart(pokemon, quantitySelect, cart) {
    let initialCart = localStorage.getItem('CART');
    
    // if there is anything already in the cart, parse the data from string format
    if (initialCart) {
        cart = JSON.parse(initialCart);
    // if nothing in cart, create and assign and empty array
    } else {
        cart = [];
    }

    let productsAlreadyInCart = findById(cart, pokemon.id);

    if (!productsAlreadyInCart) {
        const initialItem = {
            id: pokemon.id,
            quantity: quantitySelect.value
        };
        cart.push(initialItem);
    } else {
        productsAlreadyInCart.quantity = parseInt(productsAlreadyInCart.quantity) + parseInt(quantitySelect.value);
    }

    const newCart = JSON.stringify(cart);
    localStorage.setItem('CART', newCart);
}

function clearCart() {
    localStorage.removeItem('CART');
}

export { addToCart, clearCart };