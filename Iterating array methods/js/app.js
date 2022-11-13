/** @format */

const users = [
  {
    _id: "12223",
    index: 0,
    email: "@email.com",
    name: "lll",
    age: 20,
    balans: 300,
  },
  {
    _id: "10003",
    index: 1,
    email: "999@email.com",
    name: "99ll",
    age: 27,
    balans: 900,
  },
  {
    _id: "1003",
    index: 0,
    email: "999@email.com",
    name: "99ll",
    age: 18,
    balans: 500,
  },
];
//forEach
users.forEach((users, i, arr) => {
  // console.log(users,i,arr);
});
//filter
const userLess20 = users.filter((user) => user.age <= 20);
// console.log(userLess20);
//map
const usersEmail = users.map((user) => user.email);
// console.log(usersEmail);
//Reduce
const totalBalance = users.reduce((acc, user) => (acc += user.balans), 0);
// console.log(totalBalance);

const userObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});

// console.log(userObj);

//Some/Every
const isIndexFirst = users.some((user) => user.index === 1);
const isAll18 = users.every((user) => user.age > 18);
// console.log(isIndexFirst);

//Find
const user = users.find((user) => user.email === "@email.com");
// console.log(user);

//Sort
const stArr = ["denis", "bill", "anna"];
stArr.sort();
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev - next);
//  console.log(stArr);
//  console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
//  console.log(users);

//1
const arr = [1, 2, 3, 5, 8, 9, 10];
const arrObject = arr.map((item) => ({
  value: item,
  odd: Boolean(item % 2),
}));
console.log(arrObject);

//2
const arrNumber = [12, 4, 50, 1, , 18, 40];
const isZero = arrNumber.some((user) => user == 00);
console.log(isZero);

//3
const arrWords = ["yes", "hello", "no", "easycode", "what"];
const allLenght3 = arrWords.every((arrWords) => arrWords.length >= 3);
console.log(allLenght3);

//4
const arrLetters = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];
function getWord(arr) {
  return arr
    .sort((prev, next) => (prev.index > next.index ? 1 : -1))
    .reduce((acc, item) => (acc += item.char), "");
}
console.log(getWord(arrLetters));

// const totalBalance = users.reduce((acc, user) => (acc += user.balans), 0);

//5
const arr1 = [[14, 45], [1], ["a", "c", "d"]].sort(
  (prev, next) => prev.length - next.length
);
console.log(arr1);

//6
const arr01 = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } },
];

arr01.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(arr01);

//7
let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];

const filterCollection = (arr, min, max) => {
  return arr
    .filter((item) => item.price >= min && item.price <= max)
    .sort((prev, next) => prev.price - next.price);
};
console.log(filterCollection(products, 15, 30));
