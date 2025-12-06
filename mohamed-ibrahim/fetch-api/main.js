const API = "https://jsonplaceholder.typicode.com/posts/1";

function print(data) {
    document.getElementById("output").textContent = data;
}

function method(method, url, body = null) {
    const x = new XMLHttpRequest();
    x.open(method, url);

    if (body) {
        x.setRequestHeader("Content-Type", "application/json");
    }

    x.onload = () => print(x.responseText);
    x.send(body ? JSON.stringify(body) : null);
}

function doGET() {
    method("GET", API);
}

function doPOST() {
    const text = document.getElementById("text").value;
    method("POST", "https://jsonplaceholder.typicode.com/posts", {
        title: text
    });
}

function doPUT() {
    const text = document.getElementById("text").value;
    method("PUT", API, { title: text });
}

function doDELETE() {
    method("DELETE", API);
}
