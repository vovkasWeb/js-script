function every(arr, fn) {
if(Array.isArray(arr) && typeof (fn) === "function"){
	for (const element of arr) {
		if(!fn(element))return false;
	};
}
return true;
}
function callBack(el) {
	return el > 5 ? true : false;
}
let qq;
console.log(every([11,22,6,6],callBack));