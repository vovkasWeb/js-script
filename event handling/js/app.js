const btn =document.querySelector('button');
const link = document.querySelector('a');
console.dir(btn);

// btn.onclick = function(){
// 	console.log('click');
// };

btn.addEventListener('click',function(e){
console.log(e);
});

// btn.addEventListener('click',function(){
// 	console.log('click 2');
// 	});

// btn.addEventListener('click',e=>{
// console.log(this);
// console.log(e);
// });
// function clickhandler(e){
// 	console.log(this);
// 	e.preventDefault();
// 	console.log('click');
// }


// link.addEventListener('click',clickhandler);

// link.removeEventListener('click',clickhandler);
const container = document.querySelector('.container');
btn.addEventListener('click',(e)=>{
const div = document.createElement('div');
const nestedBtn =document.createElement('button');
div.textContent = Math.random();
nestedBtn.textContent= 'button';
div.appendChild(nestedBtn);
container.appendChild(div);
});

container.addEventListener('click',(e)=>{
	console.log(e.target);
	if(e.target.tagName ==='BUTTON'){
		console.log('button cliked');
	}
});