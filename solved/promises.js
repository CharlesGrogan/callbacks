const posts = [
  { title: "Post one", body: "this is post one" },
  { title: "Post two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(function(post, index) {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve;
      } else {
        reject("Error filed to upload");
      }
    }, 2000);
  });
}

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch(error => console.log(error));

getPosts();
