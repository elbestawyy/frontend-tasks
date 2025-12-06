
# **Documentation for CRUD XMLHttpRequest Project**

## **Project Overview**

This is a simple web application demonstrating CRUD (Create, Read, Update, Delete) operations using **XMLHttpRequest** with the **JSONPlaceholder API**.
The app allows users to:

1. Load a list of posts (GET).
2. Add a new post (POST).
3. Update an existing post (PUT).
4. Delete a post (DELETE).

The project uses **HTML**, **CSS**, and **Vanilla JavaScript**.

---

## **1. HTML Structure**

The main file is `index.html`.

### **Head Section**

```html
<head>
    <meta charset="UTF-8">
    <title>CRUD XMLHttpRequest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
```

* `meta charset="UTF-8"`: Ensures proper character encoding.
* `link rel="stylesheet"`: Links the external CSS file.
* `script src="script.js" defer`: Loads JS after HTML is parsed.

### **Body Section**

The body contains a main container and three cards for CRUD operations:

```html
<div class="container">
    <h2>CRUD XMLHttpRequest</h2>

    <!-- GET Posts -->
    <div class="card">
        <h3>Get All Posts</h3>
        <button onclick="getPosts()">Load Posts</button>
        <div id="posts"></div>
    </div>

    <!-- ADD Post -->
    <div class="card">
        <h3>Add New Post (POST)</h3>
        <input id="postTitle" placeholder="Title">
        <input id="postBody" placeholder="Body">
        <input id="postUser" type="number" placeholder="User ID">
        <button onclick="addPost()">Add Post</button>
        <div id="postResult"></div>
    </div>

    <!-- UPDATE Post -->
    <div class="card">
        <h3>Update Post (PUT)</h3>
        <input id="putId" type="number" placeholder="Post ID">
        <input id="putTitle" placeholder="New Title">
        <input id="putBody" placeholder="New Body">
        <button onclick="updatePost()">Update</button>
        <div id="putResult"></div>
    </div>
</div>
```

* Each **card** represents a CRUD operation.
* Input fields collect user input for creating or updating posts.
* Buttons trigger JavaScript functions.

---

## **2. JavaScript Functions**

All functions use **XMLHttpRequest** to communicate with JSONPlaceholder API.

### **2.1 getPosts()**

Fetches the first 20 posts and displays them.

```javascript
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    const container = document.getElementById("posts");
    container.innerHTML = "";

    data.slice(0, 20).forEach((post) => {
      container.innerHTML += `
        <div class="post-box" id="post-${post.id}">
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
        </div>
      `;
    });
  };

  xhr.send();
}
```

* Uses `GET` request to retrieve posts.
* Displays posts dynamically in the `#posts` container.
* Adds a delete button for each post.

---

### **2.2 addPost()**

Adds a new post using `POST` request.

```javascript
function addPost() {
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const user = document.getElementById("postUser").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    const res = JSON.parse(xhr.responseText);
    document.getElementById("postResult").innerHTML = `
      <div class="success">
        <strong>Added Successfully!</strong><br>
        ID: ${res.id}<br>
        Title: ${res.title}<br>
        Body: ${res.body}
      </div>
    `;

    // Add the new post on top of existing posts
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML =
      `<div class="post-box" id="post-${res.id}">
         <h4>${res.title}</h4>
         <p>${res.body}</p>
         <button class="delete-btn" onclick="deletePost(${res.id})">Delete</button>
       </div>` + postsContainer.innerHTML;
  };

  xhr.send(JSON.stringify({ title, body, userId: user }));
}
```

* Sends JSON data to API.
* Updates UI immediately with the new post.

---

### **2.3 updatePost()**

Updates an existing post using `PUT` request.

```javascript
function updatePost() {
  const id = document.getElementById("putId").value;
  const title = document.getElementById("putTitle").value;
  const body = document.getElementById("putBody").value;

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `https://jsonplaceholder.typicode.com/posts/${id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    const res = JSON.parse(xhr.responseText);
    document.getElementById("putResult").innerHTML = `
      <div class="success">
        <strong>Updated Successfully!</strong><br>
        ID: ${res.id}<br>
        Title: ${res.title}<br>
        Body: ${res.body}
      </div>
    `;

    // Update UI if post exists
    const postBox = document.getElementById(`post-${id}`);
    if (postBox) {
      postBox.querySelector("h4").innerText = res.title;
      postBox.querySelector("p").innerText = res.body;
    }
  };

  xhr.send(JSON.stringify({ id, title, body, userId: 1 }));
}
```

* Updates post data both on server and UI.
* Uses the post ID to target the right post.

---

### **2.4 deletePost(id)**

Deletes a post using `DELETE` request.

```javascript
function deletePost(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `https://jsonplaceholder.typicode.com/posts/${id}`, true);

  xhr.onload = function () {
    const postElement = document.getElementById(`post-${id}`);
    if (postElement) postElement.remove();

    alert("Post Deleted");
  };

  xhr.send();
}
```

* Deletes the post from API.
* Removes the post from UI immediately.

---

## **3. CSS Styling (`style.css`)**

Basic styling for layout and cards.

### **3.1 General Styles**

```css
body {
    font-family: Arial, sans-serif;
    background: #f0f2f5;
    margin: 0;
    padding: 20px;
}

h2 { color: #333; }

.container {
    width: 90%;
    max-width: 900px;
    margin: auto;
}
```

### **3.2 Card Styles**

```css
.card {
    background: #fff;
    padding: 20px;
    margin: 15px 0;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

input, button {
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
}
```

### **3.3 Buttons**

```css
button {
    background: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

button:hover { background: #0056b3; }

.delete-btn { background: red; margin-top: 10px; }
```

### **3.4 Post Boxes**

```css
.post-box {
    background: #fdfdfd;
    padding: 15px;
    margin: 10px 0;
    border-left: 5px solid #007bff;
    border-radius: 8px;
}

.success {
    background: #d4edda;
    padding: 10px;
    border-left: 5px solid #28a745;
    margin-top: 10px;
    border-radius: 8px;
}
```

---

## **Summary**

* This project demonstrates **CRUD operations using XMLHttpRequest**.
* Uses **JSONPlaceholder API** as a backend.
* Features **dynamic DOM updates** on all operations.
* Clean, responsive UI using basic CSS cards and buttons.
