var XMLHttpRequest = require("xhr2");

// GET All Posts
var xhrAll = new XMLHttpRequest();
xhrAll.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhrAll.onreadystatechange = function () {
  if (xhrAll.readyState === 4 && xhrAll.status === 200) {
    console.log("All Posts:", JSON.parse(xhrAll.responseText));
  }
};
xhrAll.send();

// GET Single Post
var xhrSingle = new XMLHttpRequest();
xhrSingle.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhrSingle.onreadystatechange = function () {
  if (xhrSingle.readyState === 4 && xhrSingle.status === 200) {
    console.log("Single Post:", JSON.parse(xhrSingle.responseText));
  }
};
xhrSingle.send();

// POST New Post
var xhrPost = new XMLHttpRequest();
xhrPost.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhrPost.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhrPost.onreadystatechange = function () {
  if (xhrPost.readyState === 4 && xhrPost.status === 201) {
    console.log("Created Post:", JSON.parse(xhrPost.responseText));
  }
};
xhrPost.send(
  JSON.stringify({
    title: "Hello",
    body: "This is a test",
    userId: 1,
  })
);

// PUT Update Post
var xhrPut = new XMLHttpRequest();
xhrPut.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
xhrPut.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhrPut.onreadystatechange = function () {
  if (xhrPut.readyState === 4 && xhrPut.status === 200) {
    console.log("Updated Post:", JSON.parse(xhrPut.responseText));
  }
};
xhrPut.send(
  JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1,
  })
);

// DELETE Post
var xhrDelete = new XMLHttpRequest();
xhrDelete.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
xhrDelete.onreadystatechange = function () {
  if (xhrDelete.readyState === 4 && xhrDelete.status === 200) {
    console.log("Post deleted successfully!");
  }
};
xhrDelete.send();
