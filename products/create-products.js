import { addToCart } from '../common/cart-apis.js';

function createProducts(product) {

    // create li element
    const li = document.createElement('li');
    // populate LI class and title attributes
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
    quantityLabel.textContent = 'Quantity: ';
    quantityLabel.style.fontSize = '14px';

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
    const button = document.createElement('button');
    button.value = product.id;
    button.textContent = 'Add';
    button.className = 'add-product-button';
    button.style.display = 'block';
    button.style.margin = '10px 50px';

    // add event listener to Add button
    button.addEventListener('click', () => {
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

    li.append(h3, img, paragraph, quantityLabel, quantitySelect, button);

    return li;
}

export {
    createProducts
};