import pokemons from '../data/pokemons.js';

const findById = (someArray, someId) => {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        // check the id against item.id
        if (item.id === someId) {
            return item;
        }
    } return null;
};

const calcLineItem = (quantity, price) => {
    const lineItemTotal = quantity * price;
    return lineItemTotal;
};

const calcOrderTotal = (cartArray, productsArray) => {
    let orderTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const lineItem = cartArray[i];
        const product = findById(productsArray, lineItem.id);

        orderTotal += calcLineItem(lineItem.quantity, product.price);
    }

    const orderTotalWithCents = orderTotal.toFixed(2);
    const orderTotalWithDollarSign = `$${orderTotalWithCents}`;
    return orderTotalWithDollarSign;
};

function seedPokemonsIntoLocalStorage() {
    const pokemonsAlreadyExistInLocalStorage = localStorage.getItem('pokemons');

    if (!pokemonsAlreadyExistInLocalStorage) {
        const stringyPokemons = JSON.stringify(pokemons);
        localStorage.setItem('pokemons', stringyPokemons);
    }
}

function getPokemons() {
    seedPokemonsIntoLocalStorage();

    const stringyPokemons = localStorage.getItem('pokemons');
    const parsedPokemons = JSON.parse(stringyPokemons);

    return parsedPokemons;
} 


export {
    findById,
    calcLineItem,
    calcOrderTotal,
    getPokemons,
    seedPokemonsIntoLocalStorage
};