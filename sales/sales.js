import { getSales } from './get-sales.js';
import { renderSalesHistoryChart } from './render-sales-history-chart.js';
import { renderSalesHistoryTable } from './render-sales-history-table.js';
import { renderSalesHistoryTableTotal } from './render-sales-history-table-total.js';

const tableBody = document.getElementById('table-body');
const tableFoot = document.getElementById('table-foot');
const salesHistory = getSales();

renderSalesHistoryChart(salesHistory);


salesHistory.forEach(item => {
    const renderedLine = renderSalesHistoryTable(item);
    tableBody.appendChild(renderedLine);
});

renderSalesHistoryTableTotal(salesHistory, tableFoot);
