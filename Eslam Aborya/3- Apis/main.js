var XMLHttpRequest = require("xhr2");


var xhrAll = new XMLHttpRequest();
xhrAll.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhrAll.onreadystatechange = function () {
  if (xhrAll.readyState === 4 && xhrAll.status === 200) {
    console.log("All Users:", JSON.parse(xhrAll.responseText));
  }
};
xhrAll.send();
var xhrSingle = new XMLHttpRequest();
xhrSingle.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
xhrSingle.onreadystatechange = function () {
  if (xhrSingle.readyState === 4 && xhrSingle.status === 200) {
    console.log("Single User:", JSON.parse(xhrSingle.responseText));
  }
};
xhrSingle.send();

var xhrPost = new XMLHttpRequest();
xhrPost.open("POST", "https://jsonplaceholder.typicode.com/users", true);
xhrPost.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhrPost.onreadystatechange = function () {
  if (xhrPost.readyState === 4 && xhrPost.status === 201) {
    console.log("New User:", JSON.parse(xhrPost.responseText));
  }
};
xhrPost.send(
  JSON.stringify({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "123-456-7890",
    website: "johndoe.com"
  })
);

var xhrPut = new XMLHttpRequest();
xhrPut.open("PUT", "https://jsonplaceholder.typicode.com/users/1", true);
xhrPut.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhrPut.onreadystatechange = function () {
  if (xhrPut.readyState === 4 && xhrPut.status === 200) {
    console.log("Updated User:", JSON.parse(xhrPut.responseText));
  }
};
xhrPut.send(
  JSON.stringify({
    id: 1,
    name: "Updated Name",
    username: "updateduser",
    email: "updated@example.com",
    phone: "987-654-3210",
    website: "updated.com"
  })
);

var xhrDelete = new XMLHttpRequest();
xhrDelete.open("DELETE", "https://jsonplaceholder.typicode.com/users/1", true);
xhrDelete.onreadystatechange = function () {
  if (xhrDelete.readyState === 4 && xhrDelete.status === 200) {
    console.log("User deleted successfully!");
  }
};
xhrDelete.send();