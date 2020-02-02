import { calcSalesHistoryTotal } from './calc-sales-history-total.js';

export function renderSalesHistoryTableTotal(salesHistory, tableFoot) {
    const allTimeTotalRow = document.createElement('tr');
    const allTimeTotalLabel = document.createElement('td');
    allTimeTotalLabel.textContent = 'All-Time Sales Total: ';
    allTimeTotalLabel.colSpan = '2';
    allTimeTotalLabel.id = 'alltime-sales-total-label';
    allTimeTotalRow.appendChild(allTimeTotalLabel);

    const allTimeTotalAmount = document.createElement('td');
    allTimeTotalAmount.textContent = calcSalesHistoryTotal(salesHistory);
    allTimeTotalAmount.id = 'alltime-total-amount';
    allTimeTotalRow.appendChild(allTimeTotalAmount);
    tableFoot.appendChild(allTimeTotalRow);
}
