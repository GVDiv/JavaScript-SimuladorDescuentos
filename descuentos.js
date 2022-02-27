

const calculateDiscountPrice = function (valuePrice, valueDiscount) {
    const percentageDiscountPrice = 100 - valueDiscount;
    const priceDiscount = (valuePrice * percentageDiscountPrice) / 100;

    return priceDiscount
};

const valueOfDiscount = function (valuePrice, valueDiscount) {
    const percentageDiscountPrice = 100 - valueDiscount;
    const priceDiscount = (valuePrice * percentageDiscountPrice) / 100;

    let valorDiscount = valuePrice - priceDiscount;
    return valorDiscount
};

const verificationCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

const onClickDiscount = function () {
    const originalPrice = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    const valuePrice = parseInt(originalPrice.value);
    const valueDiscount = parseInt(discount.value);
    const verificationCupons = verificationCupon();
    const discountCupon = valueDiscount + verificationCupons;

    const priceDiscount = calculateDiscountPrice(valuePrice, discountCupon);
    const valorDiscount = valueOfDiscount(valuePrice, discountCupon);

    const displayPrice = document.getElementById("displayPrice");
    const price = valuePrice;
    displayPrice.innerText = `$${price}`;

    const displayPriceDiscount = document.getElementById("displayPriceDiscount");
    displayPriceDiscount.innerText = `$${priceDiscount}`;

    const displayDiscountProduct = document.getElementById("displayDiscountProduct");
    displayDiscountProduct.innerText = `-${discountCupon}%`;

    const displayValueDiscount = document.getElementById("displayValueDiscount");
    displayValueDiscount.innerText = `Tu ahorro fue de: $${valorDiscount}`;
}
