const div =  document.querySelector('div');
const link  =  div.querySelector('.link');
console.log(link.parentElement);
console.log(link.closest('.link'));
console.log(div.classList);
div.classList.add('article','clozer');
console.log(div.classList);
div.classList.remove('article');

div.classList.toggle('article');

console.log(link.href ='https://www.google.com');


div.setAttribute('id','myId');//добалвения атрибута
console.log(div.id);
console.log(div.getAttribute('id'));//получения атрибута
console.log(div.hasAttribute('id'));//проверяет является ли этот атрибуб у обьекта 
console.log(div.removeAttribute('id'));//удаления атрибута
console.log(div.dataset);
console.log(div.dataset.myattr);
div.dataset.myattr= "my a"