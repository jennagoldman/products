import { renderSalesHistoryChart } from './render-sales-history-chart.js';
import { renderSalesHistoryTable } from './render-sales-history-table.js';

const tableBody = document.getElementById('table-body');
const salesHistory = JSON.parse(localStorage.getItem('sales-history'));

renderSalesHistoryChart(salesHistory);


salesHistory.forEach(item => {
    const renderedLine = renderSalesHistoryTable(item);
    tableBody.appendChild(renderedLine);
});
