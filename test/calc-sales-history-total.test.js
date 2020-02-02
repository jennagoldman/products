// IMPORT MODULES under test here:
import { calcSalesHistoryTotal } from '../sales/calc-sales-history-total.js';

const test = QUnit.test;
test('calcSalesHistoryTotal sums up individual product sales totals', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const salesHistory = [{
        id: 'psyduck',
        quantity: 2,
        total: 200,
    },
    {
        id: 'pikachu',
        quantity: 3,
        total: 150,
    },
    {
        id: 'squirtle',
        quantity: 4,
        total: 100,
    }
    ];
    const expected = `$450.00`;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = calcSalesHistoryTotal(salesHistory);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
