// عناصر الصفحة
const postsBox = document.querySelector("#posts");
const btnFetchAll = document.querySelector("#getAllBtn");
const btnFetchOne = document.querySelector("#getSingleBtn");
const btnCreate = document.querySelector("#createBtn");
const btnEdit = document.querySelector("#updateBtn");
const btnRemove = document.querySelector("#deleteBtn");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// دالة خاصة لعرض المنشورات
const displayPosts = (data) => {
  postsBox.innerHTML = "";
  const posts = Array.isArray(data) ? data : [data];

  posts.forEach((item) => {
    const block = document.createElement("div");
    block.className = "post-item";

    block.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <small><strong>User:</strong> ${item.userId}</small>
    `;

    postsBox.appendChild(block);
  });
};

// إرسال طلب باستخدام XHR (دالة مساعدة)
const sendRequest = (method, endpoint, body, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, endpoint);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(JSON.parse(xhr.responseText));
    } else {
      postsBox.innerHTML = `<p style="text-align:center;">Request failed</p>`;
    }
  };

  xhr.onerror = () => {
    postsBox.innerHTML = `<p style="text-align:center;">Network Error</p>`;
  };

  xhr.send(body ? JSON.stringify(body) : null);
};

// جلب كل المنشورات
const loadAllPosts = () => {
  sendRequest("GET", API_URL, null, displayPosts);
};

// جلب منشور واحد
const loadSinglePost = () => {
  sendRequest("GET", `${API_URL}/1`, null, displayPosts);
};

// إنشاء منشور
const addNewPost = () => {
  const newPost = {
    title: "Generated Post",
    body: "This post was created automatically.",
    userId: 5,
  };

  sendRequest("POST", API_URL, newPost, displayPosts);
};

// تعديل منشور
const modifyPost = () => {
  const updated = {
    id: 1,
    title: "Edited Post",
    body: "The content of this post has been updated.",
    userId: 5,
  };

  sendRequest("PUT", `${API_URL}/1`, updated, displayPosts);
};

// حذف منشور
const removePost = () => {
  sendRequest("DELETE", `${API_URL}/1`, null, () => {
    postsBox.innerHTML = `<p style="text-align:center;">Post has been deleted.</p>`;
  });
};

// ربط الأزرار بالوظائف
btnFetchAll.addEventListener("click", loadAllPosts);
btnFetchOne.addEventListener("click", loadSinglePost);
btnCreate.addEventListener("click", addNewPost);
btnEdit.addEventListener("click", modifyPost);
btnRemove.addEventListener("click", removePost);
