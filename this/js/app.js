
//1
const rectangle = {
	width:100,
	height:50,
	getSquare(){
		console.log(this.width* this.height);
		return this;
	}
};
rectangle.getSquare();

//2
const price = {
	price: 10,
	discount: '15%',
	getPrice(){
		console.log(this.price);
		return this;
	},
	getPriceWithDiscount(){
      console.log(this.price - (this.price / 100 * parseFloat(this.discount)));
		return this;
	}
	 };
	 price.getPrice(); // 10

	 price.getPriceWithDiscount(); // 8.5


	 //3
	 const object={
		height:10,
		inc(){
			return ++this.height;
		}
	 }
	 console.log(object.height);
	 console.log(object.inc());
	 
//4
const numerator = {
value: 1,
double: function () {
	this.value *=2;
	return this;
},
plusOne: function () {
	 ++this.value;
	 return this;
},
minusOne: function () {
   --this.value;
   return this;
},
}
numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value); // 3
//5
const prod ={
 counts: 10,
 price: 2,
 getPriceFull(){
	return this.counts* this.price;
 }
}
//6
const details = {
	counts: 10,
	price:5,
}

 details.getPriceFull= prod.getPriceFull;
//или
// prod.getPriceFull.call(details);

console.log(details.getPriceFull());
//7
let sizes = {width: 5, 
	height: 10},
getSquare = function () {
	console.log(this.width * this.height);
	return this.width * this.height};
getSquare.call(sizes);


let element = {
	height: 25,
	getHeight: function () { return this.height; }
 };
 let getElementHeight = element.getHeight.bind(element);
 
console.log(getElementHeight());
	
	