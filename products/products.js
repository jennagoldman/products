import { getProducts } from '../common/utils.js';
import { createProducts } from './create-products.js';

const parentList = document.getElementById('pokemon-list');

const products = getProducts();

products.forEach(product => {
    const renderedProducts = createProducts(product);
    parentList.appendChild(renderedProducts);
});


