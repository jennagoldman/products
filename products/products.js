import { getPokemons } from '../common/utils.js';
import { createPokemons } from './create-pokemons.js';

const parentList = document.getElementById('pokemon-list');

const pokemons = getPokemons();

pokemons.forEach(pokemon => {
    const renderedPokemons = createPokemons(pokemon);
    parentList.appendChild(renderedPokemons);
});


