let obj1={
	name: 'Vova',
	info: {
    skills: ['html','css'],
	}
};
let obj2={
	name: 'Ivan',
	age:20,
}

//не глубокое копирывания
const arr = [obj1,obj2]
let newObj = Object.assign({},obj1);
console.log(newObj);
console.log(newObj.info === obj1.info);

//глубокое копирывания
newObj = JSON.parse(JSON.stringify(obj1));
console.log(newObj.info === obj1.info);


//для получения клучей
let keys= Object.keys(obj2);
console.log(keys);

//для получения значения
let values = Object.values(obj2);
console.log(values);


//делает с обьекта массив ключений и значений
let entries = Object.entries(obj2);
console.log(entries);

//делает с  массивов ключений и значений обьект
let fromEntri = Object.fromEntries([['foo', 'bar'],
['baz', 42]]);
console.log(fromEntri);