const apiUrl = "https://dummyjson.com/posts";
const postApiUrl = "https://dummyjson.com/posts/add";

// Create wrapper container
let wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

// Title
let title = document.createElement("h1");
title.id = "title";
title.textContent = "HTTP Request Demo";
wrapper.appendChild(title);

// ============================================
// GET SECTION
// ============================================

let getSection = document.createElement("div");
getSection.className = "section section-get";
wrapper.appendChild(getSection);

let getTitle = document.createElement("h2");
getTitle.textContent = "GET Request";
getSection.appendChild(getTitle);

// GET input
let getInput = document.createElement("input");
getInput.type = "number";
getInput.placeholder = "Enter Post ID (1-100)";
getSection.appendChild(getInput);

// GET button container
let getBtnContainer = document.createElement("div");
getBtnContainer.className = "btn-container";
getSection.appendChild(getBtnContainer);

// GET single button
let getSingleBtn = document.createElement("button");
getSingleBtn.className = "btn-get";
getSingleBtn.textContent = "Get Post";
getBtnContainer.appendChild(getSingleBtn);

// GET all button
let getAllBtn = document.createElement("button");
getAllBtn.className = "btn-get-all";
getAllBtn.textContent = "Get All Posts";
getBtnContainer.appendChild(getAllBtn);

// ============================================
// POST SECTION
// ============================================

let postSection = document.createElement("div");
postSection.className = "section section-post";
wrapper.appendChild(postSection);

let postTitle = document.createElement("h2");
postTitle.textContent = "POST Request";
postSection.appendChild(postTitle);

// POST title input
let postTitleInput = document.createElement("input");
postTitleInput.type = "text";
postTitleInput.placeholder = "Enter post title";
postSection.appendChild(postTitleInput);

// POST body input
let postBodyInput = document.createElement("textarea");
postBodyInput.placeholder = "Enter post body";
postSection.appendChild(postBodyInput);

// POST button
let postBtn = document.createElement("button");
postBtn.className = "btn-post";
postBtn.textContent = "Create Post";
postSection.appendChild(postBtn);

// ============================================
// DELETE SECTION
// ============================================

let deleteSection = document.createElement("div");
deleteSection.className = "section section-delete";
wrapper.appendChild(deleteSection);

let deleteTitle = document.createElement("h2");
deleteTitle.textContent = "DELETE Request";
deleteSection.appendChild(deleteTitle);

// DELETE input
let deleteInput = document.createElement("input");
deleteInput.type = "number";
deleteInput.placeholder = "Enter Post ID to delete";
deleteSection.appendChild(deleteInput);

// DELETE button
let deleteBtn = document.createElement("button");
deleteBtn.className = "btn-delete";
deleteBtn.textContent = "Delete Post";
deleteSection.appendChild(deleteBtn);

// ============================================
// RESPONSE SECTION
// ============================================

let responseSection = document.createElement("div");
responseSection.className = "section section-response";
wrapper.appendChild(responseSection);

let responseTitle = document.createElement("h2");
responseTitle.textContent = "Response";
responseSection.appendChild(responseTitle);

// Response display
let responseBox = document.createElement("pre");
responseBox.id = "responseBox";
responseBox.textContent = "No response yet...";
responseSection.appendChild(responseBox);

// ============================================
// EVENT HANDLERS - Using XMLHttpRequest
// ============================================

// GET single post
getSingleBtn.onclick = function() {
    let id = getInput.value;
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl + "/" + id);
    
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        responseBox.textContent = JSON.stringify(data, null, 2);
    };
    
    xhr.send();
};

// GET all posts
getAllBtn.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        responseBox.textContent = JSON.stringify(data, null, 2);
    };
    
    xhr.send();
};

// POST request
postBtn.onclick = function() {
    let title = postTitleInput.value;
    let body = postBodyInput.value;
    
    let postData = {
        title: title,
        body: body,
        userId: 1
    };
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", postApiUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        responseBox.textContent = JSON.stringify(data, null, 2);
        postTitleInput.value = "";
        postBodyInput.value = "";
    };
    
    xhr.send(JSON.stringify(postData));
};

// DELETE request
deleteBtn.onclick = function() {
    let id = deleteInput.value;
    
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl + "/" + id);
    
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        responseBox.textContent = JSON.stringify(data, null, 2);
        deleteInput.value = "";
    };
    
    xhr.send();
};