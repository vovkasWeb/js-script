const plus =(x,y) => x+y;
const plusRes = plus(1,3);
// console.log(plusRes);


const withoyArg = () => console.log('Hello world');
const singleArg = x => x * 2;

const singleArg0 =(x=1) => x * 2;

const moreActions = (a,b)=>{
	a*=2;
	b*=2;
	return a+b;
};

const returnObj = (str = '') =>{
	return{
		value: str,
		length: str.length,
	};
};
const returnObj0 = (str = '') =>({
		value: str,
		length: str.length,
});



//1

const sum =(...params)=>{
	if (!params.length) return 0;
	return params.reduce((prev, next) => { return prev + next });

};

	console.log(sum(1, 2, 3, 4)); // 10
	console.log(sum()); // 0

	//2
	// function convertToObject(num) {
	// 	const obj = {
	// 		value: num,
	// 		isOdd: Boolean(num % 2)
	// 	}
	// 	return obj;
	//  }


const convertToObject= num =>({
value: num,
isOdd: Boolean(num % 2)
});

console.log(convertToObject(11));



const conve= num =>{
	let a = 10;
	return {
	value: num *a,
	isOdd: Boolean(num % 2)
	}};
	console.log(conve(0.2));