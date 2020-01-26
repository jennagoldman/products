import { addToCart } from '../common/cart-apis.js';
import { removeProduct } from '../admin-pages/remove-product.js';
import { styleLabel, styleAddButton } from '../common/style-mods.js';

function createProducts(product) {
    // create li element and populate class and title attributes
    const li = document.createElement('li');
    li.className = product.category;
    li.title = product.description;

    // create h3 element and populate with name
    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    // create img element and populate with image path
    const img = document.createElement('img');
    img.src = `../assets/${product.id}.png`;

    // create paragraph element and populate with price
    const paragraph = document.createElement('p');
    const priceWithDecimal = Number(product.price).toFixed(2);
    paragraph.textContent = `$${priceWithDecimal}`;

    //create label, select, and option elements for quantity
    const quantityLabel = document.createElement('label');
    styleLabel(quantityLabel);

    const quantitySelect = document.createElement('select');

    const selectOptionZero = document.createElement('option');
    selectOptionZero.value = 0;
    selectOptionZero.textContent = 0;

    const selectOptionOne = document.createElement('option');
    selectOptionOne.value = 1;
    selectOptionOne.textContent = 1;

    const selectOptionTwo = document.createElement('option');
    selectOptionTwo.value = 2;
    selectOptionTwo.textContent = 2;

    const selectOptionThree = document.createElement('option');
    selectOptionThree.value = 3;
    selectOptionThree.textContent = 3;

    const selectOptionFour = document.createElement('option');
    selectOptionFour.value = 4;
    selectOptionFour.textContent = 4;

    const selectOptionFive = document.createElement('option');
    selectOptionFive.value = 5;
    selectOptionFive.textContent = 5;

    quantitySelect.append(selectOptionZero, selectOptionOne, selectOptionTwo, selectOptionThree, selectOptionFour, selectOptionFive);

    // create button element for product Add
    const addProductToCartButton = document.createElement('button');
    addProductToCartButton.value = product.id;
    addProductToCartButton.textContent = 'Add';
    styleAddButton(addProductToCartButton);

    // add event listener to Add button
    addProductToCartButton.addEventListener('click', () => {
        // get the cart from local storage
        let initialCart = localStorage.getItem('CART');
        let cart;
        // if there is anything already in the cart, parse the data from string format
        if (initialCart) {
            cart = JSON.parse(initialCart);
        // if nothing in cart, create and assign and empty array
        } else {
            cart = [];
        }
        addToCart(product, quantitySelect, cart);
    });

    // create button element for product Remove on Product Entry page
    const removeProductButton = document.createElement('button');
    removeProductButton.textContent = 'Remove';
    removeProductButton.value = product.id;
    removeProductButton.id = 'remove-product-button';

    removeProductButton.addEventListener('click', () => {
        const productId = product.id;
        removeProduct(productId);
        li.remove();
    });

    li.append(h3, img, paragraph, quantityLabel, quantitySelect, addProductToCartButton, removeProductButton);

    return li;
}

export {
    createProducts
};




