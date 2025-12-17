document.getElementById("getPostsBtn").addEventListener("click", () => {
  
  const userId = document.getElementById("userIdInput").value;
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; 

  if (userId < 1 || userId > 10 || userId === "") {
    postsContainer.innerHTML = `
      <div class="alert alert-warning">Please enter a valid User ID (1–10)</div>
    `;
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => res.json())
    .then(posts => {
      
      if (posts.length === 0) {
        postsContainer.innerHTML = `
          <div class="alert alert-info">No posts found.</div>
        `;
        return;
      }

      posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "card mb-3 shadow-sm";
        div.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text" style="display:none;">${post.body}</p>
          </div>
        `;

        div.addEventListener("click", () => {
          const body = div.querySelector("p");
          body.style.display = body.style.display === "none" ? "block" : "none";
        });

        postsContainer.appendChild(div);
      });
    })
    .catch(() => {
      postsContainer.innerHTML = `
        <div class="alert alert-danger">Error fetching posts</div>
      `;
    });
});
