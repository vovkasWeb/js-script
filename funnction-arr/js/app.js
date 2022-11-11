/** @format */

// function getArray(num) {
//   if (typeof num !=="number" || num <= 0) return 0;
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(getArray(0));

// function doubleArray(arr) {
// 	if (Array.isArray(arr)===false || arr.length===0) return 0;
// 		return arr.concat(arr);

// 	}

// 	console.log(doubleArray('k'));// [1,2,3,1,2,3

// function changeCollection(arr) {
// 	if(Array.isArray(arr) === false || arr.lenght ===0) return 0;
// arr.shift();
// return arr;
// }

// console.log(changeCollection(['a', 'b', 'c']))

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

//  function filterUsers(arr, key, value) {
// if(typeof arr ==='undefined' || typeof key ==='undefined' || typeof value ==='undefined') return new Error('Error message');
//  arr.forEach(element => {
// 	for (var k in element) {
// 		if(k === key && element[k] ===value){
// 		return
// 		}
// 	}
//  });
// return 0;
//  }
// function filterUsers(arr, key, value) {

//   if (typeof arr === "undefined" || typeof key === "undefined" || typeof value === "undefined") return new Error("Error message");
  
//   for (const i of arr) {
//     if (i[key] === value) {
//       return i;
//     }
//   }
// }

// console.log(filterUsers(users, "age", 36));

const myArr = [2, 3, 4, 5, 6];

// Змініть код лише під цим рядком
// var total =0;
// for (let i = 0; i < myArr.length; i++) {
// total+=myArr[i];
// }
// console.log(total);

function multiplyAll(arr) {
	let product = 1;
	// Змініть код лише під цим рядком

 for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
	  product*= arr[i][j];
	  console.log(product);
	}
}
	// Змініть код лише над цим рядком
	return product;
 }
 
 multiplyAll([[1], [2], [3]])