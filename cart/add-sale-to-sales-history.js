import { findById } from '../common/utils.js';

export function addSaleToSalesHistory(orderList) {
    let salesHistory;
    let initialSalesHistory = localStorage.getItem('sales-history');
    // if there is data in local storage, parse it, if not, set to an empty array
    if (initialSalesHistory) {
        salesHistory = JSON.parse(localStorage.getItem('sales-history'));
    }
    else {
        salesHistory = [];
    }
    // push completed sales data into local storage
    // for each line of the order
    orderList.forEach(item => {
        // determine if any of the purchased products are already in local storage
        let productsAlreadySold = findById(salesHistory, item.id);
        // if not
        if (!productsAlreadySold) {
            // create that product's sales history object
            const initialSale = {
                id: item.id,
                quantity: item.quantity,
                total: item.quantity * item.price,
            };
            // push that object to local storage array
            salesHistory.push(initialSale);
            // if the product is already in local storage
        }
        else {
            // update the product's sold quantity
            productsAlreadySold.quantity = productsAlreadySold.quantity + item.quantity;
            // updated the product's sold dollar amount total
            productsAlreadySold.total = productsAlreadySold.total + (item.quantity * item.price);
        }
    });
    // stringify the updated sales history data and set in local storage
    const newSalesHistory = JSON.stringify(salesHistory);
    localStorage.setItem('sales-history', newSalesHistory);
}
