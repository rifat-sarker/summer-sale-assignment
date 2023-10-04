let total = 0;

function handleClickOnCards(target) {
    const selectedProductsContainer = document.getElementById('selected-products');
    // const productName = target.childNodes[1].innerText;
    const productName = target.childNodes[5].childNodes[1].innerText;
    // console.log(productName);
    
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProductsContainer.appendChild(li);

    // const price = target.childNodes[3].innerText.split(' ')[0];
    const price = target.childNodes[5].childNodes[3].innerText;
    console.log(price);

    total = parseInt(total) + parseInt(price);


    const firstTotal = document.getElementById('total-price');
    firstTotal.innerText = total;

    // if total > 0 then purchase button will become enabled
    const makePurchase = document.getElementById('make-purchase');
    if (total > 0) {
        makePurchase.removeAttribute('disabled');
    } else {
        makePurchase.setAttribute('disabled', true);
    }

    // if total > 200 apply button will become enabled
    const applyButton = document.getElementById('apply-button');
    if (total >= 200) {
        applyButton.removeAttribute('disabled')
    } else {
        applyButton.setAttribute('disabled', true);
    }

    
    
}
document.getElementById('apply-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const text = inputField.value;
    console.log(text);
    inputField.value = '';
    if (text === 'SELL200') {
        const discountPrice = document.getElementById('discount');
        const discountPercentage = 20 / 100;
        const discountTotal = total * discountPercentage;

        const discount = discountPrice.innerText = discountTotal;
        const totalFinalPrice = document.getElementById('total');
        const totalFinal = total - discountTotal;
        const finalTotal = totalFinalPrice.innerText = totalFinal;
    } else {
        alert('Wrong coupon code.Please try again!')
    }
    
})

// Function to reset all calculations and go to the home page
function resetAndGoHome() {
    window.location.href = 'index.html'; 
  }
  const resetAndGoHomeButton = document.getElementById('resetAndGoHomeButton');
  resetAndGoHomeButton.addEventListener('click', resetAndGoHome);
  


