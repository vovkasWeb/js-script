/** @format */

function getFullName(firstName, lastName) {
  // console.log(firstName, lastName);
  return function () {
    return `${firstName} ${lastName}`;
  };
}

const getname = getFullName("Vova", "Orlovsky");
// console.log(getname());

function updateValue(val) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}

const upValue = updateValue(2);
const upValue2 = updateValue(4);
console.log(upValue(1));
console.log(upValue(0));
console.log(upValue2(2));
console.log(upValue2(0));

function checkCred() {
  const login = "test";
  const password = "somePassword";

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  };
}

const check = checkCred();
console.log(check.checkLogin("test"));


function closureExample(){
	const arrOfFunc = [];
	let value = '';

	for (let  i = 0; i < 10; i++) {
		value +=i;
		arrOfFunc.push(function(){
         console.log(value,i);
		});
	}
	return arrOfFunc;
}

const res = closureExample();
res[0]();
res[6]();