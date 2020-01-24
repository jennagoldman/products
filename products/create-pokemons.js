import { findById } from '../common/utils.js';

function createPokemons(pokemon) {
    const li = document.createElement('li');

    li.className = pokemon.category;
    li.title = pokemon.description;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const img = document.createElement('img');
    img.src = `../assets/${pokemon.id}.png`;

    const paragraph = document.createElement('p');
    const priceWithDecimal = pokemon.price.toFixed(2);
    paragraph.textContent = `$${priceWithDecimal}`;

    const button = document.createElement('button');
    button.value = pokemon.id;
    button.textContent = 'Add';
    button.className = 'add-product-button';
    button.addEventListener('click', () => {
        let initialCart = localStorage.getItem('CART');
        let cart;

        if (initialCart) {
            cart = JSON.parse(initialCart);
        } else {
            cart = [];
        }

        let productsAlreadyInCart = findById(cart, pokemon.id);
        
        if (!productsAlreadyInCart) {
            const initialItem = {
                id: pokemon.id,
                quantity: 1
            };
            cart.push(initialItem);
        } else {
            productsAlreadyInCart.quantity++;
        }

        const newCart = JSON.stringify(cart);
        localStorage.setItem('CART', newCart);
    });
    li.append(h3, img, paragraph, button);

    return li;
}

export {
    createPokemons
};