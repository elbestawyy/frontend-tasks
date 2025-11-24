const output = document.getElementById('output');
const dataInput = document.getElementById('dataInput');

function httpRequest(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            callback(null, xhr.responseText);
        } else {
            callback("HTTP Error: " + xhr.status, null);
        }
    };

    xhr.onerror = function () {
        callback("Network Error", null);
    };

    if (data) xhr.send(JSON.stringify(data));
    else xhr.send();
}

// GET
document.getElementById('getBtn').addEventListener('click', () => {
    httpRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1', null, function (err, res) {
        if (err) output.innerHTML = `<p>GET Error: ${err}</p>`;
        else output.innerHTML = `<p>GET Result: ${res}</p>`;
    });
});

// POST
document.getElementById('postBtn').addEventListener('click', () => {
    const data = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };

    httpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data, function (err, res) {
        if (err) output.innerHTML = `<p>POST Error: ${err}</p>`;
        else output.innerHTML = `<p>POST Result: ${res}</p>`;
    });
});

// PUT
document.getElementById('putBtn').addEventListener('click', () => {
    const data = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };

    httpRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', data, function (err, res) {
        if (err) output.innerHTML = `<p>PUT Error: ${err}</p>`;
        else output.innerHTML = `<p>PUT Result: ${res}</p>`;
    });
});

// DELETE
document.getElementById('deleteBtn').addEventListener('click', () => {
    httpRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', null, function (err, res) {
        if (err) output.innerHTML = `<p>DELETE Error: ${err}</p>`;
        else output.innerHTML = `<p>DELETE Result: ${res}</p>`;
    });
});
