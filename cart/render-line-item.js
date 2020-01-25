import { calcLineItem } from '../common/utils.js';

// create function to create first line item as row in table
function renderLineItem(someLineItem, someProduct) {
    const lineItemRow = document.createElement('tr');

    const lineItemProduct = document.createElement('td');
    lineItemProduct.textContent = someProduct.name;

    const lineItemQuantity = document.createElement('td');
    lineItemQuantity.textContent = someLineItem.quantity;

    const lineItemPrice = document.createElement('td');
    const lineItemPriceWithCents = Number(someProduct.price).toFixed(2);
    lineItemPrice.textContent = `$${lineItemPriceWithCents}`;

    const lineItemTotal = document.createElement('td');
    const LineItemTotalRaw = calcLineItem(someLineItem.quantity, someProduct.price);
    const lineItemTotalWithCents = LineItemTotalRaw.toFixed(2);
    lineItemTotal.textContent = `$${lineItemTotalWithCents}`;

    lineItemRow.append(lineItemProduct, lineItemQuantity, lineItemPrice, lineItemTotal);

    return lineItemRow;
}

export {
    renderLineItem
};