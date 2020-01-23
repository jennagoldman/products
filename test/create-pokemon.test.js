// IMPORT MODULES under test here:
import { createPokemons } from '../products/create-pokemons.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('createPokemons renders Pikachu data as formatted and styled list item', function(assert) {
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

    const expected = '<li class="electric" title="Electric-type, mouse Pokemon"><h3>Pikachu</h3><img src="../assets/pikachu.png"><p>$50.00</p><button value="pikachu">Add</button></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const pikachuListItem = createPokemons(pikachu);
    const result = pikachuListItem.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
