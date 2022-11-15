/** @format */

//деструктуризация обьектов

const user = {
  firstName: "Vova",
  lastName: "Orlovsky",
  age: 20,
  info: {
    work: "no working",
    skills: ["html", "css"],
  },
};
// const {firstName:name,lastName, age:years=30}=user;
const {
  info: { work, skills },
} = user;
// console.log(work);

//деструктуризация массивов
const colors = ["white", "black", "blue", "#jjj"];
const [w, b, blue, green = "green"] = colors;
// console.log(w,b ,green);

const names = ["Vova", "Denis", "Maksim"];
const [, name2, name3] = names;
const [name1, ...otherNames] = names;
// console.log(name1,otherNames);
// console.log(name2);

const nestedArr = ["hello world", ["key", "value"]];
const [, [key, value]] = nestedArr;
// console.log(key,value);

//копирывания не гблубокое
const [...newNames] = names;
// console.log(newNames);
// console.log(newNames === names);

//копирывания 2 не гблубокое
const newNames1 = [...names];
// console.log(...newNames1);

//cслеивания
const colorNames = [...colors, ...names];
// console.log(colorNames);

const newUser = { ...user, age: 30 };
// console.log(newUser);

const {
  info: {
    skills: [html, css],
  },
} = newUser;
// console.log(html,css);

function myPerson({
  lastName = "",
  firstName = "",
  info: { skills = [] } = {},
} = {}) {
  console.log(lastName, firstName, skills);
}
myPerson(newUser);

function foo(x, y) {
  console.log(arguments);
  const [...args] = arguments;
  console.log(args);
}

foo(1, 2);

const d = (...arr) => console.log(arr);
d(23234, 455, 667, 888, 0);

const d0 = (...arr) => {
  return arr;
};
console.log(d0(23234, 455, 667, 888, 0));

const nunbers = [2, 3];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...nunbers);
//1
const func = (first = "", ...other) => ({
  first,
  other,
});
console.log(func("a", "b", "c", "d"));
//2
const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

const getInfo = ({
  name = "Unknown",
  info: { partners: [first = "none", second = "none"] = [] } = {},
} = {}) => ({
  Name: name,
  Partners: [first, second],
});
console.log(getInfo(organisation));

//3
let user0 = {
	'guid': "dd969d30-841d-436e-9550-3b0c649e4d34",
	"isActive": false,
	"balance": "$2,474.46",
	"age": 30,
	"eyeColor": "blue",
	"name": "Tameka Maxwell",
	"gender": "female",
	"company": "ENOMEN",
	"email": "tamekamaxwell@enomen.com",
	"phone": "+1 (902) 557-3898",
	"tags": [
	  "aliquip",
	  "anim",
	  "exercitation",
	  "non",
	],
	"friends": [
	  {
		 "id": 0,
		 "name": "Barber Hicks"
	  },
	  {
		 "id": 1,
		 "name": "Santana Cruz"
	  },
	  {
		 "id": 2,
		 "name": "Leola Cabrera"
	  }
	],
 };

const {name='',balance='',email='',tags=[],friends:[{id='',name: name10=''},]=[]}= user0;
console.log(name,balance,email);
console.log(tags[0],tags[tags.length-1]);
console.log(name10);

const newUserInfo= [...user0.tags,...user0.friends];
console.log(newUserInfo);