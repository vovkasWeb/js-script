const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';//можно записывать и теги
// title.textContent = 'new text';//только для текста
// title.appendChild("<span>appan</span>");

// title.insertAdjacentHTML('beforebegin','<h2>titlw</h2>');
// title.insertAdjacentElement

// title.innerHTML += "<span>new text</span>";
// const span =title.querySelector('span');
// console.log(span);
// title.innerHTML += "<span>new text2</span>";
// span.textContent = "asffg";

//coздание элимента
const span = document.createElement('span');
span.textContent="span created";
span.classList.add('mySlasss');
title.appendChild(span);

const fragment = document.createDocumentFragment();
console.log(fragment);
const colors= ['black','white','orange'];
colors.forEach((color)=>{
const item = document.createElement('div');
item.classList.add(`bg-${color}`);
item.style.background =color;
item.style.color= 'blue';
item.textContent = color;
fragment.appendChild(item);
});

document.body.appendChild(fragment);

//удаления
title.remove();
//или
title.parentElement.replaceChildren(title);
