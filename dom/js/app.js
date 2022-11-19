//1
const btn = document.querySelector('#btn-msg');

// btn.addEventListener('click',e =>alert(btn.getAttribute('data-text')));
// //2
// btn.addEventListener('mouseover',e=>{
// // btn.style.background= 'black';
// btn.classList.add('castom-btn');
// });
// btn.addEventListener('mouseleave',e=>{
// // btn.style.background= 'grey';
// btn.classList.remove('castom-btn');
// });
//3
const tagTextContainer = document.getElementById('tag');
document.body.addEventListener('click',(e) => {
	tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});
//4

const btnG = document.querySelector('#btn-generate');
const ul = document.querySelector('ul');
btnG.addEventListener('click',e =>{
	const num = ul.children.length + 1;
	var li= document.createElement('li');
	li.textContent=`Item ${num}`;
	ul.appendChild(li);
});