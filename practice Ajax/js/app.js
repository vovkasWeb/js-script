/** @format */
const url = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");
var form = document.querySelector("form");
function getUsers(cb) {
  const xhr = new XMLHttpRequest();

  // console.log(xhr);
  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("eror");
  });

  xhr.send();
}

function createUser(body, cb) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	xhr.addEventListener("load", () => {
	  const response = JSON.parse(xhr.responseText);
	  cb(response);
	});
	xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
	xhr.addEventListener("error", () => {
	  console.log("eror");
	});
 
	xhr.send(JSON.stringify(body));
 }




function cardTemplate(user){
	const card = document.createElement("div");
	card.classList.add("card");

	const titleHeader = document.createElement("h5");
	titleHeader.classList.add("card-header");
	titleHeader.textContent = 'Name: ' +user.name;
	card.appendChild(titleHeader);

	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body","card-body--active");
	

	const username = document.createElement("p");
	username.classList.add("card-text");
	username.textContent = 'Usernam: ' +user.username;
	cardBody.appendChild(username);


	const email = document.createElement("p");
	email.classList.add("card-text");
	email.textContent = 'Email: ' +user.email;
	cardBody.appendChild(email);

	const phone = document.createElement("p");
	phone.classList.add("card-text");
	phone.textContent = 'Phone: ' + user.phone;
	cardBody.appendChild(phone);
	card.appendChild(cardBody);
	return card;
}

function renderUser(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
	const card = cardTemplate(user);
	 fragment.appendChild(card);
  });
  container.appendChild(fragment);
}
getUsers(renderUser);

container.addEventListener('click', e=>{
if(e.target.tagName=='H5')
{
let l = e.target.parentElement;
l.querySelector('.card-body').classList.toggle('card-body--active');
}
});


form.addEventListener("submit", function(event) {
	event.preventDefault();
	
	const newPost = {
		name: form.elements.name.value,
		username: form.elements.username.value,
		email: form.elements.emailAdress.value,
		phone: form.elements.phone.value,
	 };
	 createUser(newPost, (response) => {
	  const card = cardTemplate(response);
	  container.insertAdjacentElement('afterbegin',card);
	  console.log(card);
  
	 });
	 
});