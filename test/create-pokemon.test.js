// IMPORT MODULES under test here:
import { createProducts } from '../products/create-products.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('createProducts renders Pikachu data as formatted and styled list item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pikachu = {
        id: 'pikachu',
        name: 'Pikachu',
        image: 'assets/pikachu.png',
        description: 'Electric-type, mouse Pokemon',
        category: 'electric',
        price: 50,
    };

    const expected = '<li class="electric" title="Electric-type, mouse Pokemon"><h3>Pikachu</h3><img src="../assets/pikachu.png"><p>$50.00</p><label style="font-size: 14px;">Quantity: </label><select><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><button value="pikachu" class="add-product-button" style="display: block; margin: 10px 50px;">Add</button><button value="pikachu" id="remove-product-button">Remove</button></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const pikachuListItem = createProducts(pikachu);
    const result = pikachuListItem.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
