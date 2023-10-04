let total = 0;
function handleClickOnCards(target){
    const selectedProductsContainer = document.getElementById('selected-products');
    const productName = target.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductsContainer.appendChild(li);

    const price = target.childNodes[3].innerText.split(' ')[0];
    
    total = parseInt(total) + parseInt(price);
    

    const firstTotal = document.getElementById('total-price');
    firstTotal.innerText = total;
    
    // if total > 0 then purchase button will become enabled
    const makePurchase = document.getElementById('make-purchase');
    if(total > 0){
        makePurchase.removeAttribute('disabled');
    }
    else{
        makePurchase.setAttribute('disabled', true);
    }

    // if total > 200 apply button will become enabled
    const applyButton = document.getElementById('apply-button');
    if(total >= 200){
        applyButton.removeAttribute('disabled')
    }
    else{
        applyButton.setAttribute('disabled', true);
    }

    document.getElementById('apply-button').addEventListener('click', function(){
        const discountPrice = document.getElementById('discount');
        const discountPercentage = 20 / 100 ;
        const discountTotal = total * discountPercentage;
        const discountTotalPrice = total - discountTotal;
        discountPrice.innerText = discountTotalPrice;
    
    })
}
// document.getElementById('input-field').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     const applyButton = document.getElementById('apply-button');
//     if( text === 'SELL200'){
//         applyButton.removeAttribute('disabled');
//     }
//     else{
//         applyButton.setAttribute('disabled', true);
//     }
    
// })



