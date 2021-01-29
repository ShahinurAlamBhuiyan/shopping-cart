function handlerProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + 'Input');
    const productInputNum = parseInt(productInput.value);
    let productNewInput = productInputNum;
    if (isIncrease == true) {
        productNewInput = productInputNum + 1;
    }
    if (isIncrease == false && productInputNum > 0) {
        productNewInput = productInputNum - 1;
    }
    productInput.value = productNewInput;
    let productTotalPrice = 0;
    if (product == "mobile") {
        productTotalPrice = productNewInput * 1219;
    }
    if (product == "case") {
        productTotalPrice = productNewInput * 59;
    }
    document.getElementById(product + "PerPrice").innerText = productTotalPrice;
    calculateTotal() ;
}

function calculateTotal() {
    const caseInputNum = getInputValue("case")
    const mobileInputNum = getInputValue("mobile");
    const subTotalPrice = mobileInputNum * 1219 + caseInputNum * 59;
    document.getElementById("subTotal").innerText = subTotalPrice;

    const taxAmount = Math.round(subTotalPrice * 0.1);
    document.getElementById("taxAmount").innerText = taxAmount;

    const grandTotal = subTotalPrice + taxAmount;
    document.getElementById("grandTotal").innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "Input");
    const productInputNum = parseInt(productInput.value);
    return productInputNum;
}
const checkOut = document.getElementById('checkOut').addEventListener("click", function () {
    alert('Thank you for buying with us.')
})