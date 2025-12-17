**Project:** CRUD (Users) Angular Demo

- **Purpose:** A small Angular demo app for managing users (create, read, update, delete).
- **Stack:** Angular v21, TypeScript, RxJS, Tailwind tooling, Angular CLI

**Project Structure (important files):**
- **`package.json`** — project scripts (`npm start`, `npm test`, `npm build`) and dependencies.
- **`src/main.ts`, `src/index.html`** — app bootstrap and HTML entry.
- **`src/app/app.ts`, `src/app/app.html`, `src/app/app.css`** — root component and layout.
- **`src/app/app.routes.ts`, `src/app/app.config.ts`** — routing and app-level configuration.
- **`src/app/services/users.ts`** — in-memory `Users` service and `User` interface (methods: `getAll()`, `create()`, `delete()`, `update()`).
- **`src/app/users/users.ts`** — `UsersComponent` (standalone) that consumes the service.
- **`src/app/users/users.html`** — template for listing, adding, editing, deleting users.

**How it works:**
- The `UsersComponent` retrieves user data from the injectable `Users` service via `getAll()` and renders it in the template.
- The template provides a form to add users and inline edit controls to modify or delete users.
- The `Users` service is an in-memory implementation (sample users + `nextId` counter). No backend by default.

**Run locally:**
1. Install dependencies:
```bat
cd /d C:\Users\Tyounan\Desktop\mg\crud
npm install
```
2. Start dev server:
```bat
npm start
```
Open `http://localhost:4200` in a browser.

**Tests & Build:**
- Run tests: `npm test`
- Build: `npm run build`

**Next steps / suggestions:**
- Replace the in-memory `Users` service with an HTTP-backed service using `HttpClient` to connect to a real API.
- Add route `/users` (or ensure the component is mounted in `app.html`) so the UI is reachable.
- Add unit tests for the service and component to increase confidence.
- Apply styling or Tailwind configuration updates for visual polish.

Created/updated by developer tools.

