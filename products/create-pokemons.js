function createPokemons(pokemon) {
    const li = document.createElement('li');
    li.className = pokemon.category;
    li.title = pokemon.description;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const img = document.createElement('img');
    img.src = `../assets.${pokemon.id}.png`;

    const paragraph = document.createElement('p');
    const priceWithDecimal = pokemon.price.toFixed(2);
    paragraph.textContent = `$${priceWithDecimal}`;

    const button = document.createElement('button');
    button.value = pokemon.id;
    button.textCotent = 'Add';

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(paragraph);
    li.appendChild(button);

    return li;
}

export {
    createPokemons
};