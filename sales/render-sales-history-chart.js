

export function renderSalesHistoryChart(salesHistory) {const products = [];
    const salesTotals = [];

    salesHistory.forEach(item => {
        products.push(item.id);
        salesTotals.push(item.total);
    });

    const ctx = document.getElementById('sales-report-canvas').getContext('2d');


    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products,
            datasets: [{
                label: 'Total Sales $',
                data: salesTotals,
                backgroundColor: ['#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71', '#F64C71']
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}