import products from '../data/products.js';

const findById = (someArray, someId) => {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        // check the id against item.id
        if (item.id === someId) {
            return item;
        }
    } return null;
};

const calcLineItem = (quantity, price) => {
    const lineItemTotal = quantity * price;
    return lineItemTotal;
};

const calcOrderTotal = (cartArray, productsArray) => {
    let orderTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const lineItem = cartArray[i];
        const product = findById(productsArray, lineItem.id);

        orderTotal += calcLineItem(lineItem.quantity, product.price);
    }

    const orderTotalWithCents = orderTotal.toFixed(2);
    const orderTotalWithDollarSign = `$${orderTotalWithCents}`;
    return orderTotalWithDollarSign;
};

function seedProductsIntoLocalStorage() {
    const productsAlreadyExistInLocalStorage = localStorage.getItem('products');

    if (!productsAlreadyExistInLocalStorage) {
        const stringyProducts = JSON.stringify(products);
        localStorage.setItem('products', stringyProducts);
    }
}

function getProducts() {
    seedProductsIntoLocalStorage();

    const stringyProducts = localStorage.getItem('products');
    const parsedProducts = JSON.parse(stringyProducts);

    return parsedProducts;
} 


export {
    findById,
    calcLineItem,
    calcOrderTotal,
    getProducts,
    seedProductsIntoLocalStorage
};