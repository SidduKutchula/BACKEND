let sellingPrice = 199;
let listingPrice = 799;
const discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(typeof (discountPrice));
const discountRound = Math.round(discountPrice);
console.log(discountRound);
//ternary

const authentication = false;
authentication ? console.log("Success") : console.log("Fail");