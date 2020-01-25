import { getProducts } from '../common/utils.js';
import { createProducts } from '../products/create-products.js';

// get needed elements from DOM
const parentList = document.getElementById('pokemons-list');
const addProductEntryButton = document.getElementById('add-pokemon-entry-button');

// retrieve existing products array
const products = getProducts();

addProductEntryButton.addEventListener('click', (event) => {
    event.preventDefault();

    // push new product into array
    const productEntryForm = document.getElementById('product-entry-form');
    const data = new FormData(productEntryForm);
    const numberizedPrice = Number(data.get('price'));


    const newProduct = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('img-src'),
        price: numberizedPrice.toFixed(2)
    };

    products.push(newProduct);

    // re-save the products array
    const stringyProducts = JSON.stringify(products);
    localStorage.setItem('products', stringyProducts);

    // build new product card and add to DOM
    const newProductListItem = createProducts(newProduct);
    parentList.appendChild(newProductListItem);

});

// display existing products in DOM
// HERE instead of above because putting it above event listener results in the new product card having a quantity and 'add' button
products.forEach(product => {
    const productListItem = createProducts(product);
    productListItem.querySelector('button').remove();
    productListItem.querySelector('label').remove();
    productListItem.querySelector('select').remove();
    parentList.appendChild(productListItem);
});


