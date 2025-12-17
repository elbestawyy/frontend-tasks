[Portfolio Badge](https://img.shields.io/badge/Portfolio-Angular-blue)
[Status](https://img.shields.io/badge/Status-Active-green)

This is a **personal portfolio website** built with **Angular 21 Standalone Components**.  
It showcases my skills as a **Java Developer**.

---

Features

- Built with **Angular 21 Standalone Components**
- Client-side routing using `RouterOutlet`
- Responsive layout with CSS Flexbox
- Navbar + Footer shared across all pages
- Pages: Home, About, Contact
- Easy-to-update project images and content

---

Project Structure

```

src/
├─ app/
│  ├─ app.component.ts          # Root component with navbar, footer, router-outlet
│  ├─ app.component.html
│  ├─ app.routes.ts             # Routes configuration
│  ├─ pages/
│  │  ├─ home/
│  │  │  ├─ home.component.ts
│  │  │  ├─ home.component.html
│  │  │  └─ home.component.css
│  │  ├─ about/
│  │  │  ├─ about.component.ts
│  │  │  ├─ about.component.html
│  │  │  └─ about.component.css
│  │  ├─ contact/
│  │  │  ├─ contact.component.ts
│  │  │  ├─ contact.component.html
│  │  │  └─ contact.component.css
│  │  ├─ navbar/
│  │  │  ├─ navbar.component.ts
│  │  │  └─ navbar.component.html
│  │  └─ footer/
│  │     ├─ footer.component.ts
│  │     └─ footer.component.html
├─ assets/
│  └─ images/                  # Hero, profile, and project images
└─ styles.css                   # Global CSS

```

---

## 🛣 Routing

```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // fallback
];
```

> **RouterOutlet** in `app.component.html` displays the pages based on URL.

---

Components Overview

| Component | Description                                           |
| --------- | ----------------------------------------------------- |
| Navbar    | Top navigation bar with links to Home, About, Contact |
| Footer    | Footer section with copyright info                    |
| Home      | Hero section introducing Abdelrahman Shalaby          |
| About     | Profile and skills                                    |
| Contact   | Contact info, email, phone, LinkedIn                  |

---

Styling

- **Global CSS:** `styles.css` → body, navbar, footer, buttons, typography
- **Component CSS:** Each page has its own CSS file (Home, About, Contact)
- **Color scheme:** Dark background (#0f0f0f) with cyan highlights (#00e5ff)
- Responsive layout using Flexbox

---

How to Run

```bash
# Install dependencies
npm install

# Run the project
ng serve --open
```

Opens in browser: [http://localhost:4200](http://localhost:4200)

---

**Author:** Abdelrahman Shalaby
**Role:** Java Developer

```

---


```
