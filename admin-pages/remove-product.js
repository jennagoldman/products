import { getProducts } from '../common/utils.js';

export function removeProduct(productId, li) {
    const products = getProducts();
    const indexOfProduct = products.findIndex(i => i.id === productId);
    products.splice(indexOfProduct, 1);

    const stringyProducts = JSON.stringify(products);

    localStorage.setItem('products', stringyProducts);

    li.remove();
}