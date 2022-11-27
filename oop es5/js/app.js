// const str = new String('hello world');
// console.log(str);
// console.log(String);
// console.log(String('hello world'));

function Product(brand='',price=0,discount){
	console.log(this);

	//1. Coздается новый обьект
	//2. на этот обьект устанавливается ссылка this
	//3. возрщается этот обьект
	this.brand = brand
	this.price = price;
	this.discount = discount;

}



const apple = new Product('Aplle',100,15);
const samsung = new Product('Samsung',200,25);
console.log(apple);
console.log(samsung);
// console.log(apple.getPriceWithDiscount());
// console.log(samsung.getPriceWithDiscount());

//prototype 
console.log(apple.hasOwnProperty('brand'));
Product.prototype.getPriceWithDiscount = function(){
	return (this.price *(100- this.discount))/100;
};
Product.prototype.setPrice = function(newPrice){
	this.price = newPrice;
};
console.log(apple);
console.log(apple.getPriceWithDiscount());
apple.setPrice(500);
console.log(apple);

console.log(new XMLHttpRequest());