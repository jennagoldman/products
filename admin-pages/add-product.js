import { getPokemons } from '../common/utils.js';
import { createPokemons } from '../products/create-pokemons.js';

// get needed elements from DOM
const parentList = document.getElementById('pokemons-list');
const addPokemonEntryButton = document.getElementById('add-pokemon-entry-button');

// retrieve existing products array
const products = getPokemons();

addPokemonEntryButton.addEventListener('click', (event) => {
    event.preventDefault();

    // push new product into array
    const productEntryForm = document.getElementById('product-entry-form');
    const data = new FormData(productEntryForm);
    const numberizedPrice = Number(data.get('price'));


    const newPokemon = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('img-src'),
        price: numberizedPrice.toFixed(2)
    };

    products.push(newPokemon);

    // re-save the products array
    const stringyPokemons = JSON.stringify(pokemons);
    localStorage.setItem('pokemons', stringyPokemons);

    // build new product card and add to DOM
    const newPokemonListItem = createPokemons(newPokemon);
    parentList.appendChild(newPokemonListItem);

});

// display existing products in DOM
// HERE instead of above because putting it above event listener results in the new product card having a quantity and 'add' button
products.forEach(pokemon => {
    const pokemonListItem = createPokemons(pokemon);
    pokemonListItem.querySelector('button').remove();
    pokemonListItem.querySelector('label').remove();
    pokemonListItem.querySelector('select').remove();
    parentList.appendChild(pokemonListItem);
});


