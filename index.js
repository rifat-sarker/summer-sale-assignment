function handleClickOnCards(target){
    const selectedProductsContainer = document.getElementById('selected-products');
    const productName = target.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductsContainer.appendChild(li);
}

