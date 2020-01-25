
import { renderLineItem } from './render-line-item.js';
import { findById, calcOrderTotal, getProducts } from '../common/utils.js';
import { clearCart } from '../common/cart-apis.js';

// get products from localStorage
const products = getProducts();

// get elements from DOM
const tableBody = document.getElementById('table-body');
const tableFoot = document.getElementById('table-foot');
const placeOrderButton = document.getElementById('place-order-button');

// get cart from local storage, set to empty array if empty and disable place order button
const stringyOrderList = localStorage.getItem('CART');

let orderList;
if (stringyOrderList) {
    orderList = JSON.parse(stringyOrderList);
}
else {
    orderList = [];
    placeOrderButton.disabled = 'true';
}

// create rows for each line item
orderList.forEach(lineItem => {
    // locate the product based on id provided in line item
    const product = findById(products, lineItem.id);
    
    // render the line item as a table row
    const renderedLineItem = renderLineItem(lineItem, product);
    
    // append the table row to the table body
    tableBody.appendChild(renderedLineItem);
});

const orderTotalRow = document.createElement('tr');

const orderTotalLabel = document.createElement('td');
orderTotalLabel.textContent = 'Order Total: ';
orderTotalLabel.colSpan = '3';
orderTotalLabel.id = 'order-total-label';
orderTotalRow.appendChild(orderTotalLabel);

const orderTotalAmount = document.createElement('td');
orderTotalAmount.textContent = calcOrderTotal(orderList, products);
orderTotalAmount.id = 'order-total-amount';
orderTotalRow.appendChild(orderTotalAmount);

tableFoot.appendChild(orderTotalRow);


placeOrderButton.addEventListener('click', () => {
    alert(JSON.stringify(orderList, true, 2));
    clearCart();
    window.location = '../index.html';
});





