let salesTotal = 0;

export function calcSalesHistoryTotal(salesHistory) {
    salesHistory.forEach(item => {
        
        salesTotal += item.total;

    });
    const salesTotalWithCents = salesTotal.toFixed(2);
    const formattedSalesTotal = `$${salesTotalWithCents}`;
    return formattedSalesTotal;
}