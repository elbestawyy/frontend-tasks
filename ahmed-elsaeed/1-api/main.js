function show(result) {
    document.getElementById("result").textContent =
        typeof result === "string" ? result : JSON.stringify(result, null, 2);
}


function createPost() {
    const title = document.getElementById("post-title").value;
    const body = document.getElementById("post-body").value;
    const userId = Number(document.getElementById("post-user").value);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, userId })
    })
        .then(res => res.json())
        .then(show)
        .catch(() => show("Network Error"));
}


function updatePost() {
    const id = document.getElementById("put-id").value;
    const title = document.getElementById("put-title").value;
    const body = document.getElementById("put-body").value;
    const userId = Number(document.getElementById("put-user").value);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, body, userId })
    })
        .then(res => res.json())
        .then(show)
        .catch(() => show("Network Error"));
}


function deletePost() {
    const id = document.getElementById("delete-id").value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    })
        .then(res => show({ message: "Post deleted", status: res.status }))
        .catch(() => show("Network Error"));
}


function listPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(res => res.json())
        .then(show)
        .catch(() => show("Network Error"));
}
