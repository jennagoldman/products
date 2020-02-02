import { renderSalesHistoryChart } from './render-sales-history-chart.js';

const salesHistory = JSON.parse(localStorage.getItem('sales-history'));

renderSalesHistoryChart(salesHistory);