**Project:** CRUD (Users) Angular Demo (portf)

- **Purpose:** A compact Angular demo application for managing users (create, read, update, delete). This copy lives in the `portf` folder for portfolio or demonstration use.
- **Stack:** Angular v21, TypeScript, RxJS, Tailwind tooling (dev), Angular CLI

**Project Structure (key files):**
- **`package.json`** — scripts (`npm start`, `npm test`, `npm build`) and dependencies.
- **`src/main.ts`, `src/index.html`** — app bootstrap and HTML entry.
- **`src/app/app.ts`, `src/app/app.html`** — root component and layout.
- **`src/app/services/users.ts`** — in-memory `Users` service and `User` interface (exposes `getAll()`, `create()`, `delete()`, `update()`).
- **`src/app/users/users.ts`** — `UsersComponent` (standalone) which consumes the service and provides the UI.
- **`src/app/users/users.html`** — template for listing, adding, editing, and deleting users.

**How it works:**
- `UsersComponent` calls the injected `Users` service (`getAll()`) to retrieve user data and renders it in the component template.
- The template provides a small form to add users and inline editing controls to modify or delete users.
- The `Users` service is currently an in-memory store with sample users and an auto-increment `nextId`; there is no backend API by default.

**Run locally:**
1. Install dependencies:
```bat
cd /d C:\Users\Tyounan\Desktop\mg\portf
npm install
```
2. Start dev server:
```bat
npm start
```
Open `http://localhost:4200` after the server starts.

**Tests & Build:**
- Run unit tests: `npm test`
- Build for production: `npm run build`

**Next steps / suggestions:**
- Replace the in-memory `Users` service with an HTTP-backed service using `HttpClient` to connect to a real API.
- Ensure the `UsersComponent` is mounted or routed (e.g., add `/users` route) so the feature is reachable from the app shell.
- Add unit tests for the component and service, and polish styles or Tailwind config for presentation.

This README was added/updated to document the small CRUD demo for portfolio purposes.

