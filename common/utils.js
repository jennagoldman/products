const findById = (someArray, someId) => {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        // check the id against item.id
        if (item.id === someId) {
            return item;
        }
    } return null;
};

const calcLineItem = (quantity, amount) => {
    const lineItemTotal = quantity * amount;
    return lineItemTotal;
};


export {
    findById,
    calcLineItem
};