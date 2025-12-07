
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        padding: 30px;
    }

    .container {
        max-width: 900px;
        margin: auto;
    }

    form input {
        margin-bottom: 10px;
    }

    table {
        margin-top: 20px;
        background: white;
        border-radius: 5px;
        overflow: hidden;
    }

    .btn {
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        color: white;
    }

    .btn-danger {
        background: #d9534f;
    }

    .btn-success {
        background: #5cb85c;
    }

    .btn:hover {
        opacity: 0.8;
    }

    .row {
        display: flex;
        gap: 10px;
    }

    input {
        padding: 8px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button[type="submit"] {
        margin-top: 10px;
        background: #d9534f;
        padding: 8px 16px;
    }
`;
document.head.appendChild(style);



document.body.innerHTML = `
    <div class="container">
        <form>
            <div class="row">
                <input type="text" placeholder="First name" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-danger">Submit</button>
        </form>

        <table class="table" border="1" width="100%" cellpadding="10">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
`;



var form = document.querySelector("form");

function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function Table() {
  var tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";
  var users = getUsers();

  users.forEach((user, index) => {
    var newTr = document.createElement("tr");

    newTr.innerHTML = `
      <td>${user.firstName}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
    `;

    var newTd = document.createElement("td");

    var editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-success");
    editButton.textContent = "Update";

    editButton.addEventListener("click", () => {
      form.querySelector('input[placeholder="First name"]').value = user.firstName;
      form.querySelector('input[placeholder="Email"]').value = user.email;
      form.querySelector('input[placeholder="Password"]').value = user.password;
      form.setAttribute("data-edit-index", index);
    });

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      users.splice(index, 1);
      setUsers(users);
      Table();
    });

    newTd.appendChild(editButton);
    newTd.appendChild(deleteButton);
    newTr.appendChild(newTd);
    tableBody.appendChild(newTr);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var FirstName = form.querySelector('input[placeholder="First name"]');
  var Email = form.querySelector('input[placeholder="Email"]');
  var Password = form.querySelector('input[placeholder="Password"]');

  var firstName = FirstName.value.trim();
  var email = Email.value.trim();
  var password = Password.value.trim();

  var users = getUsers();
  var editIndex = form.getAttribute("data-edit-index");

  if (editIndex !== null) {
    users[editIndex] = { firstName, email, password };
    form.removeAttribute("data-edit-index");
  } else {
    users.push({ firstName, email, password });
  }

  setUsers(users);
  Table();
  form.reset();
});

Table();
