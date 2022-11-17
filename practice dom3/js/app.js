const ul  = document.querySelector('ul');
const li= document.createElement('li');
li.textContent=`item${ul.children.length+1}`;
li.classList.add('new-item');
ul.appendChild(li);

const li1= document.createElement('li');
li1.textContent=`item${ul.children.length+1}`;
li1.classList.add('new-item');
ul.appendChild(li1);

//2
const [...links] = ul.querySelectorAll('a');
links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));

//3
const img = document.createElement('img');
img.src ='https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg';
img.alt = 'img';
document.body.prepend(img);

//4
const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

//
const list= document.querySelector('ul');
const listItem= [...link.children].sort((prev,next)=>{return prev.textContent>next.textContent? -1:1;});
list.innerHTML='';
listItem.forEach((item)=>list.appendChild(item));
