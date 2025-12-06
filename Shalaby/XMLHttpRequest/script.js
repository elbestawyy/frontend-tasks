// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
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

    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML =
      `
                <div class="post-box" id="post-${res.id}">
                    <h4>${res.title}</h4>
                    <p>${res.body}</p>
                    <button class="delete-btn" onclick="deletePost(${res.id})">Delete</button>
                </div>
            ` + postsContainer.innerHTML;
  };

  xhr.send(
    JSON.stringify({
      title,
      body,
      userId: user,
    })
  );
}

// -----------------------------------------------------------------------------
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

    const postBox = document.getElementById(`post-${id}`);
    if (postBox) {
      postBox.querySelector("h4").innerText = res.title;
      postBox.querySelector("p").innerText = res.body;
    }
  };

  xhr.send(
    JSON.stringify({
      id,
      title,
      body,
      userId: 1,
    })
  );
}

// -----------------------------------------------------------------------------
function deletePost(id) {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `https://jsonplaceholder.typicode.com/posts/${id}`, true);

  xhr.onload = function () {
    const postElement = document.getElementById(`post-${id}`);
    if (postElement) {
      postElement.remove();
    }

    alert("Post Deleted");
  };

  xhr.send();
}
