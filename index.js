let total = 0;
function handleClickOnCards(target){
    const selectedProductsContainer = document.getElementById('selected-products');
    const productName = target.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductsContainer.appendChild(li);

    const price = target.childNodes[3].innerText.split(' ')[0];
    
    total = parseInt(total) + parseInt(price);
    console.log(total);

    const firstTotal = document.getElementById('total-price');
    firstTotal.innerText = total;
}

