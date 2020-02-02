import { findById } from './utils.js';

export function addToSales(product, quantitySelect, lineItemTotal) {
    let salesHistory;

    let initialSalesHistory = localStorage.getItem('sales-history');
    
    // if there is anything already in sales history, parse the data from string format
    if (initialSalesHistory) {
        salesHistory = JSON.parse(initialSalesHistory);
    // if nothing in sales history, create and assign an empty array
    } else {
        salesHistory = [];
    }

    let productsAlreadySold = findById(salesHistory, product.id);

    if (!productsAlreadySold) {
        const initialSale = {
            id: product.id,
            quantity: quantitySelect.value,
            total: lineItemTotal
        };
        salesHistory.push(initialSale);
    } else {
        productsAlreadySold.quantity = parseInt(productsAlreadySold.quantity) + parseInt(quantitySelect.value);
        productsAlreadySold.total = parseInt(productsAlreadySold.total) + parseInt(lineItemTotal.value);
    }

    const newSalesHistory = JSON.stringify(salesHistory);
    localStorage.setItem('sales-history', newSalesHistory);
}