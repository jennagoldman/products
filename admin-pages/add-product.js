import { getProducts } from '../common/utils.js';
import { products } from './product-entry.js';

function addProduct(newProduct) {
// retrieve existing products array
    getProducts();
// push the new product into the array
    products.push(newProduct);
// re-save the products array
    const stringyProducts = JSON.stringify(products);
    localStorage.setItem('products', stringyProducts);
}

export { addProduct };

