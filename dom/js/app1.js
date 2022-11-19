/** @format */

const ul = document.querySelector(".menu");

ul.addEventListener("click", (e) => {
  let item = e.currentTarget.querySelector(".dropdown-menu");
  console.log(item);
  item.classList.add('d-none');
});
