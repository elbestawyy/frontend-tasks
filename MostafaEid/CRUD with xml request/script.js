
const root = document.createElement("div");
root.style.fontFamily = "Arial";
root.style.padding = "20px";
document.body.appendChild(root);


function createCard(title, body) {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "15px";
    card.style.margin = "10px 0";
    card.style.borderRadius = "8px";
    card.style.background = "#f8f8f8";

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = body;

    card.appendChild(h3);
    card.appendChild(p);
    root.appendChild(card);
}





// =================================================================================================
const getXhr = new XMLHttpRequest();
getXhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

getXhr.onload = function () {
    if (getXhr.status === 200) {
        const data = JSON.parse(getXhr.responseText);
        createCard(data.title, data.body);
    }
};

getXhr.send();

const postXhr = new XMLHttpRequest();
postXhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
postXhr.setRequestHeader("Content-Type", "application/json");

const newPost = {
    title: "New Post",
    body: "Hello from POST request",
    userId: 1
};

postXhr.onload = function () {
    if (postXhr.status === 201) {
        const data = JSON.parse(postXhr.responseText);
        createCard(data.title, data.body);
    }
};

postXhr.send(JSON.stringify(newPost));
