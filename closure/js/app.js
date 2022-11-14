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
// console.log(upValue(1));
// console.log(upValue(0));
// console.log(upValue2(2));
// console.log(upValue2(0));

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
// console.log(check.checkLogin("test"));

function closureExample() {
  const arrOfFunc = [];
  let value = "";

  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

const res = closureExample();
// res[0]();
// res[6]();

//1
function minus(firsr = 0) {
  return function (second = 0) {
    return firsr - second;
  };
}

//console.log(minus(10)(6)); // 4

//console.log(minus(5)(6)); // -1

//console.log(minus(10)()); // 10

//console.log(minus()(6)); // -6

//console.log(minus()()); // 0

//2

function multiplyMaker(firsr = 1) {
  let bufer = firsr;
  return function (second = 1) {
    return (bufer *= second);
  };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

//3
function module(val = "") {
  if (typeof val === "number") String(val);
  let velue = val;
  return {
    setValue(value) {
      return (velue = value);
    },
    getValue() {
      return velue;
    },
    getLenght() {
      return velue.length;
    },
    getchangeling() {
      return velue.split("").reverse().join("");
    },
  };
}
const a = module("vova");
console.log(a.getValue());
console.log(a.setValue("slavik"));
console.log(a.getLenght());
console.log(a.getchangeling());

function calculator() {
  let sum =0;
  function setValue(num=0) {
    sum = num;
    return this;
  }
  function add(num) {
    sum += Number(num);
    return this;
  }
  function multiply(num) {
    sum *= num;
    return this;
  }
  function degree(num) {
    sum = Math.pow(sum, num);
    return this;
  }
  function getSum() {
    return Number(sum.toFixed(2)) || 0;
  }
  return {
    setValue,
    add,
    multiply,
    degree,
    getSum,
  };
}

const v = calculator();
// console.log(v.setValue(2));
// console.log(v.add(1));
// console.log(v.multiply(3));
// console.log(v.degree(2));
// console.log(v.getSum());
console.log(v.setValue(10).degree(2).getSum());
