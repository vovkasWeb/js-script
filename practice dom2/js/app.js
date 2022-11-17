/** @format */

//1
document.querySelector("ul").classList.add("list");
//2
var a =document.querySelector("ul")
let linkTrue = false;
while (!linkTrue == true) {
	a = a.nextSibling;
	if(a.tagName==='A'){
		a.id= 'link';
		linkTrue=true;
	}

}

//3
let lis= document.querySelectorAll('li');
for (let i = 0; i < lis.length; i++) {
	if(i%2==0) lis[i].classList.add('item');
	
}
let[...links] = document.links;
links.forEach(element => element.classList.add('custom-link'));