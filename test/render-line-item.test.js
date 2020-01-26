import { renderLineItem } from '../cart/render-line-item.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('renderLineItem renders line item as table row', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const someLineItem = {
        id: 'pikachu',
        quantity: 2
    };

    const someProduct = {
        id: 'pikachu',
        name: 'Pikachu',
        image: 'assets/pikachu.png',
        description: 'Electric-type, mouse Pokemon',
        category: 'electric',
        price: 50,
    };
    const expected = '<tr><td>Pikachu</td><td>2</td><td>$50.00</td><td>$100.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderLineItem(someLineItem, someProduct).outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});