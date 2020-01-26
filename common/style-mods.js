function styleLabel(labelNode) {
    labelNode.textContent = 'Quantity: ';
    labelNode.style.fontSize = '14px';
}

function hideQuantityDropdown(newProductListItem) {
    newProductListItem.querySelector('label').remove();
    newProductListItem.querySelector('select').remove();
    newProductListItem.querySelector('button').remove();
}

function styleAddButton(button) {
    button.classList.add('add-product-button');
    button.style.display = 'block';
    button.style.margin = '10px 50px';
}

export {
    styleLabel,
    hideQuantityDropdown,
    styleAddButton
};