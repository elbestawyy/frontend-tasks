# Task JS — Simple Web Project

A small static web project containing a single HTML page with related CSS and JavaScript files. Intended as a minimal demo or exercise project.

**Project**: Simple front-end demo using `main.html`, `css/styles.css`, and `js/script.js`.

**Files**:
- `main.html`: Entry HTML file for the project.
- `css/styles.css`: Styles for the page.
- `js/script.js`: JavaScript behavior for the page.

**Main functions:**
  - `getUsers()` / `setUsers(users)`: read/write the `users` array to `localStorage`.
  - `Table()`: re-renders the table body from stored users and attaches `Update` / `Delete` buttons for each row.
  - Form submit handler: creates a new user or updates an existing one (using `data-edit-index`), saves to storage, and re-renders.
- **UI flow:** add a user via the form, update by clicking `Update` (fills the form), delete by clicking `Delete` (removes entry and re-renders).

**Important notes & cautions**
- Passwords are stored in plain text in `localStorage` — this is insecure and only acceptable for a local demo. Do not store real passwords like this in production.
- The script uses `document.body.innerHTML = ...` which replaces the entire body; if you later add other scripts or content they may be removed. Prefer appending elements to a specific container instead.

If you want, I can update `js/script.js` to avoid clobbering the body, add basic input validation, mask or avoid storing passwords, and add delete confirmations.