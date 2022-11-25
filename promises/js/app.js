/** @format */

const promise = new Promise((resolve, reject) => {
  //setTimeout(() => reject('error'),1000);
  setTimeout(() => resolve(Math.random()), 1000);
});

console.log(promise);
promise
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y))
  .catch((err) => console.log(err));

//   promise.then(z=>console.log(z));

// const myHttp = http();
// myHttp.get(
//   `https://jsonplanceholder.typicode.com/posts`,
//   (err, res) => {
//     if (err) {
//       console.log("eroror", err);
//       return;
//     }
//   },
//   myHttp.get(
//     `https://jsonplanceholder.typicode.com/comments?postId=1`,
//     (err, res) => {
//       if (err) {
//         console.log("eroror", err);
//         return;
//       }
//       myHttp.get(`https://jsonplanceholder.typicode.com/user/1`, (err, res) => {
//         if (err) {
//           console.log("error", err);
//           return;
//         }
//         console.log("наконец");
//       });
//     }
//   )
// );

function getPosts(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function getPostComments(post) {
	const{id} = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject({post,comments:res});
        }
        resolve(res);
      }
    );
  });
}
function getUserCreatedPost(data) {
const {post:{userId}} = data;
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/user/${userId}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve({...data,user:res});
    });
  });
}

// console.log(getPosts());

// getPost()
// .then(post=> console.log(post));
getPosts(7)
  .then((post) => getPostComments())
  .then((data) => getUserCreatedPost(data))
  .then((fullData) => console.log(fullData))
  .catch(err=> console.log(err));
