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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "this is post three" }, getPosts);
