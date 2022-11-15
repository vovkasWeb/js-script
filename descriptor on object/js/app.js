const car ={
brand: 'Audi',
year: 2019,
get age(){
	return `Машина выпущена в ${this.year}`
},
set age(value){
	this.year = value;
}
};

// Object.defineProperty(car,'age',{
//  configurable: false,//нельзя будет удалить
//  enumerable: false,//не будет видно и спользвать
//  writable: false, //нельзя будет но можно удалить
// get: function(){
// 	return `Машина выпущена в ${this.year}`;
// }
// });
car.age=2021;
console.log(car.age);

Object.defineProperty(window,'globalVar',{
	set: function(value){
		console.log(value);
		debugger;
	}
})


function foo(){
	window.globalVar = 10;
}

console.log(window.globalVar);