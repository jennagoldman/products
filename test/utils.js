// IMPORT MODULES under test here:
import pokemons from '../data/pokemons.js';
import { findById, calcLineItem } from '../common/utils.js';
// import example from '../src/example.js';

const test = QUnit.test;

test("findById returns pikachu object's name when provided with pikachu's id", function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'Pikachu';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundPokemon = findById(pokemons, 'pikachu');
    const result = foundPokemon.name;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('line item total for 3 products at $75 each is $225', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 225;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineItem(3, 75);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
