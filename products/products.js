import pokemons from '../data/pokemons.js';
import { createPokemons } from './create-pokemons.js';

const parentList = document.getElementById('pokemon-list');

for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];

    const renderedPokemons = createPokemons(pokemon);
    parentList.appendChild(renderedPokemons);
}


