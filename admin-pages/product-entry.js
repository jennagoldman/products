import { getProducts } from '../common/utils.js';
import { createProducts } from '../products/create-products.js';
import { addProduct } from './add-product.js';

// get needed elements from DOM
const parentList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product-button');


// retrieve existing products array
const products = getProducts();


products.forEach(product => {
    const productListItem = createProducts(product);
    productListItem.querySelector('button').remove();
    productListItem.querySelector('label').remove();
    productListItem.querySelector('select').remove();
    parentList.appendChild(productListItem);
});



addProductButton.addEventListener('click', (event) => {
    event.preventDefault();

    // get form data and store in variables
    const productEntryForm = document.getElementById('product-entry-form');
    const data = new FormData(productEntryForm);
    const numberizedPrice = Number(data.get('price'));

    // create new object from form data
    const newProduct = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('img-src'),
        price: numberizedPrice.toFixed(2)
    };

    // add the new object to the products array
    addProduct(newProduct);

    // build new product card and add to DOM
    const newProductListItem = createProducts(newProduct);
    newProductListItem.querySelector('label').remove();
    newProductListItem.querySelector('select').remove();
    newProductListItem.querySelector('button').remove();
    parentList.appendChild(newProductListItem);

});

