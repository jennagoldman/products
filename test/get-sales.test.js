// IMPORT MODULES under test here:
import { getSales } from '../sales/get-sales.js';

const test = QUnit.test;
test('retrieves array of sales data objects from local storage', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    localStorage.getItem('sales-history');
    let salesHistory = [];

    salesHistory.push({ id: 'pikachu', quantity: 2, total: 100 });

    const newSalesHistory = JSON.stringify(salesHistory);
    localStorage.setItem('sales-history', newSalesHistory);

    const expected = [{ id: 'pikachu', quantity: 2, total: 100 }];

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getSales();

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
