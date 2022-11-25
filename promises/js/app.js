/** @format */

const promise = new Promise((resolve, reject) => {
	//setTimeout(() => reject('error'),1000);
  setTimeout(() => resolve(Math.random()), 1000);
});

console.log(promise);
promise
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y)).catch(err=>console.log(err));

//   promise.then(z=>console.log(z));