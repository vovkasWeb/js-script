/** @format */

class ProductEs {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }
  get brand() {
    return this._brand;
  }
  set brand(name) {
    this._brand = name;
  }
  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }
  //   setPrice(newPrice){
  // 	 this.price = newPrice;
  //   }
  ["setPrice"](newPrice) {
    this.price = newPrice;
  }
  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductEs("Samsung", 200, 10);
newProduct.setPrice(3000);
console.log(ProductEs.plus(1, 3));
console.log(newProduct);
console.log(newProduct.brand='kj');
console.log(newProduct.getPriceWithDiscount());
console.log(newProduct.brand);
// console.log(Data.now());

const data = new Date();
console.log(data);
