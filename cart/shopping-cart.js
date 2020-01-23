import pokemons from '../data/pokemons.js';
import orderList from '../data/cart.js';
import { renderLineItem } from './render-line-item.js';
import { findById, calcOrderTotal } from '../common/utils.js';

// get elements from DOM
const tableBody = document.getElementById('table-body');

// loop through line items data
for (let i = 0; i < orderList.length; i++) {
    // store each line item in a variable
    const lineItem = orderList[i];
    // locate the product based on id provided in line item
    const product = findById(pokemons, lineItem.id);

    // render the line item as a table row
    const renderedLineItem = renderLineItem(lineItem, product);

    // append the table row to the table body
    tableBody.appendChild(renderedLineItem);
}

const tableFoot = document.getElementById('table-foot');

const orderTotalRow = document.createElement('tr');

const orderTotalLabel = document.createElement('td');
orderTotalLabel.textContent = 'Order Total: ';
orderTotalLabel.colSpan = '2';
orderTotalLabel.id = 'order-total-label';
orderTotalRow.appendChild(orderTotalLabel);

const orderTotalAmount = document.createElement('td');
orderTotalAmount.textContent = calcOrderTotal(orderList, pokemons);
orderTotalAmount.id = 'order-total-amount';
orderTotalRow.appendChild(orderTotalAmount);

tableFoot.appendChild(orderTotalRow);

