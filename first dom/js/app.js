const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
 let h1 = document.getElementsByTagName('h1');
//  console.dir(h1);
//  console.log(titles);
 //console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
//  console.log([...h1]);


 console.log(document.querySelector('head')); 
 console.log(document.querySelector('body'));
 console.log(document.querySelector('body').children);
 console.log([...document.querySelector('div').children]);
 let dev = [...document.querySelector('div').children];


 function isParent(parent, child) {
	return child.parentNode===parent;
}

 console.log(isParent(document.body.children[0], document.querySelector('mark')));

 const filterdLink = [...document.links].filter(a=>!a.closest('ul'));
 console.log(filterdLink);