# portfolio-ui

A personal portfolio web app for **Suraj Verma** (Full Stack Developer), built with React. It presents an interactive single-page portfolio — home, about, projects, experience, and contact — along with a Firebase-backed authentication flow and a blog route.

## Tech Stack

- **React 18** (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
- **React Router v6** (`react-router-dom`) for routing
- **react-scroll** for smooth in-page section navigation
- **Sass / SCSS** and **styled-components** for styling
- **AOS** (Animate On Scroll) for scroll animations
- **Firebase** (Authentication + Firestore) for sign-in / sign-up
- **web-vitals** for performance reporting

## Features

- **Single-page portfolio** composed of stacked sections: Home, About, Projects, Experience, and Contact.
- **Sticky navbar** with smooth scrolling between sections (`react-scroll`) and a responsive hamburger menu. When a user is signed in, navigation collapses to the Home link.
- **Projects showcase** — a card grid of personal projects (Contact Manager, Blogging App, Course App, Shine.com clone, Medikal mobile app, EaseMyTrip clone) with tech stacks plus GitHub/live links.
- **Experience section** — interactive company switcher detailing roles, tech stacks, and accomplishments.
- **Contact section** with social links (LinkedIn, GitHub) and a contact form.
- **Authentication** (`/login`) — email/password and Google sign-in via Firebase, with user documents stored in Firestore.
- **Blog route** (`/blog`).

## Project Structure

```
src/
├── App.js                  # Route definitions (Navbar layout + nested routes)
├── index.js                # App entry point
├── context/
│   └── user.context.jsx    # Auth state via React Context
├── routes/
│   ├── navbar/             # Top navigation + layout outlet
│   ├── root/               # Landing page that composes the section routes
│   ├── home/               # Hero / intro section
│   ├── about/              # About + skills sections
│   ├── project/            # Projects showcase
│   ├── experience/         # Work experience switcher
│   ├── contact/            # Contact info + form
│   ├── auth/               # Sign-in / sign-up page
│   └── blog/               # Blog page
├── components/             # Reusable UI (buttons, cards, forms, about-sections)
├── utils/firebase/         # Firebase config + auth/Firestore helpers
└── assets/                 # Images, fonts, icons, resume
```

Routes (see `src/App.js`):

| Path     | Page              |
| -------- | ----------------- |
| `/`      | Portfolio (home)  |
| `/login` | Authentication    |
| `/blog`  | Blog              |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Installation

```bash
git clone git@github.com:vermasuraj11011/portfolio-ui.git
cd portfolio-ui
npm install
```

### Run in development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads on changes.

## Available Scripts

| Command         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm start`     | Runs the app in development mode.                      |
| `npm test`      | Launches the test runner in interactive watch mode.    |
| `npm run build` | Builds the app for production into the `build` folder. |
| `npm run eject` | Ejects CRA configuration (one-way operation).          |

## Configuration

Firebase configuration currently lives in `src/utils/firebase/firebase.utils.js`. For your own deployment, replace the `firebaseConfig` object with your project's credentials (ideally moved into environment variables).

## Author

**Suraj Verma** — Full Stack Developer

- LinkedIn: [surajverma008](https://www.linkedin.com/in/surajverma008)
- GitHub: [vermasuraj11011](https://github.com/vermasuraj11011)
