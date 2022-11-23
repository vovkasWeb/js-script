/** @format */

const container = document.querySelector(".container");
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/users";
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

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const titleHeader = document.createElement("h5");
    titleHeader.classList.add("card-header");
    titleHeader.textContent = user.name;
    card.appendChild(titleHeader);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body","card-body--active");
    

    const username = document.createElement("p");
    username.classList.add("card-text");
    username.textContent = user.username;
	 cardBody.appendChild(username);


    const email = document.createElement("p");
    email.classList.add("card-text");
    email.textContent = user.email;
	 cardBody.appendChild(email);

    const phone = document.createElement("p");
    phone.classList.add("card-text");
    phone.textContent = user.phone;
	 cardBody.appendChild(phone);
	 card.appendChild(cardBody);
	 fragment.appendChild(card);
  });
  console.log(fragment);
  container.appendChild(fragment);
}
getPosts(renderPosts);

container.addEventListener('click', e=>{
if(e.target.tagName=='H5')
{
let l = e.target.parentElement;
l.querySelector('.card-body').classList.toggle('card-body--active');
}
});