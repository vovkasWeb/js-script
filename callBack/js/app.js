/** @format */

const names = ["Denis", "Vova", "Maks", "Slavik"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}
function nameLenght(el) {
//   console.log(el);
  return el.length;
}
function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLenght);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result);
// console.log(result2);

function greeting(fistName){
	return function(lastName){
		return `Hello, ${fistName}  ${lastName}`;
	};
}
const testGreeting = greeting('Denis');
const fullName = testGreeting('Orlovsky');
console.log(fullName);