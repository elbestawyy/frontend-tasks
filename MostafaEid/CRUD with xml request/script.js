const root = document.createElement("div");
root.style.fontFamily = "Arial, sans-serif";
root.style.padding = "20px";
root.style.maxWidth = "600px";
root.style.margin = "0 auto";
document.body.appendChild(root);

const header = document.createElement("h2");
header.textContent = "CRUD App with XHR API";
header.style.textAlign = "center";
header.style.color = "#333";
root.appendChild(header);

const form = document.createElement("form");
form.style.background = "#fff";
form.style.padding = "20px";
form.style.borderRadius = "10px";
form.style.marginBottom = "20px";
form.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
root.appendChild(form);

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "Post Title";
titleInput.required = true;
titleInput.style.width = "100%";
titleInput.style.padding = "10px";
titleInput.style.marginTop = "10px";
titleInput.style.borderRadius = "6px";
titleInput.style.border = "1px solid #ccc";
form.appendChild(titleInput);

const bodyInput = document.createElement("textarea");
bodyInput.placeholder = "Post Body";
bodyInput.required = true;
bodyInput.style.width = "100%";
bodyInput.style.padding = "10px";
bodyInput.style.marginTop = "10px";
bodyInput.style.borderRadius = "6px";
bodyInput.style.border = "1px solid #ccc";
form.appendChild(bodyInput);

const postIdInput = document.createElement("input");
postIdInput.type = "hidden";
form.appendChild(postIdInput);

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Save Post";
submitBtn.style.width = "100%";
submitBtn.style.padding = "10px";
submitBtn.style.marginTop = "10px";
submitBtn.style.borderRadius = "6px";
submitBtn.style.border = "none";
submitBtn.style.background = "#4CAF50";
submitBtn.style.color = "white";
submitBtn.style.cursor = "pointer";
submitBtn.onmouseover = () => (submitBtn.style.background = "#45a049");
submitBtn.onmouseout = () => (submitBtn.style.background = "#4CAF50");
form.appendChild(submitBtn);

const postsContainer = document.createElement("div");
root.appendChild(postsContainer);

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function createCard(post) {
    const card = document.createElement("div");
    card.style.background = "#fff";
    card.style.padding = "15px";
    card.style.borderRadius = "10px";
    card.style.margin = "10px auto";
    card.style.maxWidth = "100%";
    card.style.boxShadow = "0 3px 6px rgba(0,0,0,0.1)";
    card.style.position = "relative";

    const h3 = document.createElement("h3");
    h3.textContent = post.title;
    h3.style.margin = "0 0 10px 0";
    h3.style.color = "#333";
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = post.body;
    p.style.color = "#555";
    card.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginRight = "5px";
    editBtn.style.padding = "5px 10px";
    editBtn.style.fontSize = "14px";
    editBtn.style.background = "#2196F3";
    editBtn.style.color = "#fff";
    editBtn.style.border = "none";
    editBtn.style.borderRadius = "5px";
    editBtn.style.cursor = "pointer";
    editBtn.onmouseover = () => (editBtn.style.background = "#1976D2");
    editBtn.onmouseout = () => (editBtn.style.background = "#2196F3");
    editBtn.onclick = () => {
        titleInput.value = post.title;
        bodyInput.value = post.body;
        postIdInput.value = post.id;
    };
    card.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.fontSize = "14px";
    deleteBtn.style.background = "#f44336";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onmouseover = () => (deleteBtn.style.background = "#d32f2f");
    deleteBtn.onmouseout = () => (deleteBtn.style.background = "#f44336");
    deleteBtn.onclick = () => {
        if (confirm("Are you sure you want to delete this post?")) {
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE", `${apiUrl}/${post.id}`);
            xhr.onload = () => {
                alert("Deleted! (API won't persist this)");
                fetchPosts();
            };
            xhr.send();
        }
    };
    card.appendChild(deleteBtn);

    postsContainer.appendChild(card);
}

function fetchPosts() {
    postsContainer.innerHTML = "<p>Loading...</p>";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl + "?_limit=5"); 
    xhr.onload = () => {
        if (xhr.status === 200) {
            postsContainer.innerHTML = "";
            const data = JSON.parse(xhr.responseText);
            data.forEach(post => createCard(post));
        }
    };
    xhr.send();
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const id = postIdInput.value;

    if (!title || !body) return;

    const xhr = new XMLHttpRequest();
    if (id) {
        xhr.open("PUT", `${apiUrl}/${id}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            alert("Updated! (API won't persist this)");
            fetchPosts();
            form.reset();
            postIdInput.value = "";
        };
        xhr.send(JSON.stringify({ id, title, body, userId: 1 }));
    } else {
        xhr.open("POST", apiUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            alert("Created! (API won't persist this)");
            fetchPosts();
            form.reset();
        };
        xhr.send(JSON.stringify({ title, body, userId: 1 }));
    }
});

fetchPosts();
