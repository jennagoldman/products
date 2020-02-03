export function renderSalesHistoryTable(item) {

    const lineItemRow = document.createElement('tr');

    const lineItemProduct = document.createElement('td');
    lineItemProduct.textContent = item.id;
    
    const lineItemQuantity = document.createElement('td');
    lineItemQuantity.textContent = item.quantity;
    
    const lineItemTotal = document.createElement('td');
    const lineItemTotalWithCents = (item.total).toFixed(2);
    lineItemTotal.textContent = `$${lineItemTotalWithCents}`;
    
    lineItemRow.append(lineItemProduct, lineItemQuantity, lineItemTotal);
    
    return lineItemRow;
        
}


