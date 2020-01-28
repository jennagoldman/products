import { getProducts } from '../common/utils.js';

function addProduct(newProduct) {
// retrieve existing products array
    const products = getProducts();
// push the new product into the array
    products.push(newProduct);
// re-save the products array
    const stringyProducts = JSON.stringify(products);
    localStorage.setItem('products', stringyProducts);
}

export { addProduct };

