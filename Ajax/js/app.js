/** @format */
const url = "https://jsonplaceholder.typicode.com/posts";
const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");
function getPosts(cb) {
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
function createPost(body, cb) {
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

function cardTemplate(post){
	const card = document.createElement("div");
	card.classList.add("card");
	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");
	const title = document.createElement("h5");
	title.textContent = post.title;
	title.classList.add("card-title");
	const article = document.createElement("p");
	article.textContent = post.body;
	article.classList.add("card-text");
	cardBody.appendChild(title);
	cardBody.appendChild(article);
	card.appendChild(cardBody);
	return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}
btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  createPost(newPost, (response) => {
   const card = cardTemplate(response);
	container.insertAdjacentElement('afterbegin',card);
	console.log(card);

  });
});
