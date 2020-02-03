export function getSales() {
    const salesHistory = JSON.parse(localStorage.getItem('sales-history'));

    return salesHistory;
}