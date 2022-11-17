 //1
 title = document.querySelector('p').textContent;
 console.log(document.querySelector('p').textContent);

 //2
 function infoDomElement(element){
return{
	type: typeof element,
	nodeType: element.nodeType,
	name: element.tagName,
	children: element.children.length
}
 }

 console.log(infoDomElement(document.querySelector('ul')));


 //3
function getTextFromUl(element){
   const [...links]= element.querySelectorAll('a');
return  links.map(item => item.textContent);
}
console.log(getTextFromUl(document.querySelector('ul')));

//4
const [...pChildNodes] = document.querySelector('p').childNodes;
    pChildNodes.forEach(child => {
      if (child.nodeType === 3) {
        child.textContent = '-text-'
      }
    });