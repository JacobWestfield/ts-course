interface IPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

type TNumberString = number | string;

const totalPrice = (purchase: IPrice): TNumberString => {
  if (!purchase.isInstallment) {
    return `This is a common credit. This app doesn't support additional info about interest rate. Price is ${purchase.price}`;
  }
  if (purchase.discount / 100 >= 1) {
    return "Discount is higher than price, you don't need installment, purchase is free";
  }
  const discountPrice: number = purchase.price * (1 - purchase.discount / 100);
  return discountPrice / purchase.months;
};

const price1: IPrice = {
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
};

const price2: IPrice = {
  price: 200000,
  discount: 130,
  isInstallment: true,
  months: 12,
};

const price3: IPrice = {
  price: 200000,
  discount: 30,
  isInstallment: false,
  months: 12,
};

const purchase1: TNumberString = totalPrice(price1);
const purchase2: TNumberString = totalPrice(price2);
const purchase3: TNumberString = totalPrice(price3);

console.log(purchase1);
console.log(purchase2);
console.log(purchase3);
