import { calcLineItem } from '../common/utils.js';



// create function to create first line item as row in table
function renderLineItem(someLineItem, someProduct) {
    const lineItemRow = document.createElement('tr');

    const lineItemProduct = document.createElement('td');
    lineItemProduct.textContent = someProduct.name;
    lineItemRow.appendChild(lineItemProduct);

    const lineItemQuantity = document.createElement('td');
    lineItemQuantity.textContent = someLineItem.quantity;
    lineItemRow.appendChild(lineItemQuantity);

    const lineItemTotal = document.createElement('td');
    lineItemTotal.textContent = calcLineItem(someLineItem.quantity, someProduct.price);
    lineItemRow.appendChild(lineItemTotal);

    return lineItemRow;
}

export {
    renderLineItem
};