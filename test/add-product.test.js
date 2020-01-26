// IMPORT MODULES under test here:
import { addProduct } from '../admin-pages/add-product.js';

const test = QUnit.test;
test('addProduct adds newProduct object to the end of the products array in localStorage', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const newProduct = {
        id: 'psyduck',
        name: 'Psyduck',
        image: 'assets/psyduck.png',
        description: 'Water-type, duck Pokemon',
        category: 'water',
        price: 100,
    };

    const expected = newProduct;

    //Act 
    // Call the function you're testing and set the result to a const

    addProduct(newProduct);

    const resultArray = JSON.parse(localStorage.getItem('products'));
    const result = resultArray[resultArray.length - 1];

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
