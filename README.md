# Full Stack Starter (React + Express + MongoDB)

This repository contains a beginner-friendly, scalable full-stack structure:

- `frontend`: React app (UI)
- `backend`: Node.js + Express API
- MongoDB via Mongoose in the backend

## Folder Structure

```text
full_stack/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   ├── .env
│   └── package.json
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── .gitignore
├── LICENSE
└── README.md
```

## Quick Start

1. Install frontend dependencies:
   - `cd frontend`
   - `npm install`
2. Install backend dependencies:
   - `cd ../backend`
   - `npm install`
3. Start backend:
   - `npm run dev`
4. In another terminal, start frontend:
   - `cd ../frontend`
   - `npm start`