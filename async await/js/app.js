/** @format */

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());
    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    ).then((res) => res.json());

    return [response, response2];
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
getPost(2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}

getAll();
