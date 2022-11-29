/** @format */

// const User = {
//   name: "Vovka",
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };

// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     },
//   };
// }

// const vova = new User('Vovka');
// vova.setName('viva');
// console.log(vova.getName());

// function User(name) {
// 	let userName = name;

// 	return Object.freeze({
// 		getName() {
// 			return userName;
// 		 },
// 		 setName(name) {
// 			userName = name;
// 		 },
// 		});
//  }

//  const vova = new User('Vovka');
//  vova.setName('viva');
// //  vova.getName = function(){return"KKK"};
//  console.log(vova.getName());

function User(name) {
	const symbol =Symbol();
  return {
	[symbol]: name,
    getName() {
      return this[symbol];
    },
    setName(name) {
      this[symbol] = name;
    },
  };
}
const vova = new User('Vovka');
console.log(vova);