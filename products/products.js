import pokemons from '../data/pokemons.js';
import { createPokemons } from './create-pokemons.js';

const parentList = document.getElementById('pokemon-list');

pokemons.forEach(pokemon => {
    const renderedPokemons = createPokemons(pokemon);
    parentList.appendChild(renderedPokemons);
});


