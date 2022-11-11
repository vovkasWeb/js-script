/** @format */

// const names = ["Denis", "Vova", "Maks", "Slavik"];

// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }
// function nameLenght(el) {
// //   console.log(el);
//   return el.length;
// }
// function nameToUpperCase(el) {  
//   return el.toUpperCase();
// }

// const result = mapArray(names, nameLenght);
// const result2 = mapArray(names, nameToUpperCase);
// // console.log(result);
// // console.log(result2);

// function greeting(fistName){
// 	return function(lastName){
// 		return `Hello, ${fistName}  ${lastName}`;
// 	};
// }
// const testGreeting = greeting('Denis');
// const fullName = testGreeting('Orlovsky');
// console.log(fullName);
// 1
function firstFunc(arr, fn) {
	let srt='New value:';
	for (let i = 0; i < arr.length; i++) {

	srt+= fn(arr[i]);
	}
	return srt;
}

function handler1(el) {
	return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
return `${el*10},`;
}
 console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el){
	return `${el.name} is ${el.age},`;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
return el.split("").reverse().join("");
}

console.log(firstFunc(['abs', '123'], handler4));