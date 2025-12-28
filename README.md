# PERN Todo Web App

A full-stack Todo application built using the PERN stack (PostgreSQL, Express, React, Node.js).
This app allows users to create, view, edit, and delete todos with a responsive frontend and RESTful backend.

<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/3bbc94d8-1ef4-4c23-97fe-e5ea08a687b3" />


## Tech Stack

### Frontend

React (Vite)

Bootstrap (UI components)

Tailwind CSS (utility styling)

Fetch API

### Backend

Node.js

Express.js

PostgreSQL

REST API

-------------------------------------------------------------------------

## Setup & Installation

git clone https://github.com/Cainvon17/Pern-ToDo.git

cd Pern-ToDo

# Backend Setup

cd server

npm install


-> Create a PostgreSQL database and update database.js:

const pool = new Pool({

  user: "postgres",
  
  password: "your_password",
  
  host: "localhost",
  
  port: 5432,
  
  database: "perntodo"
  
});

-> Start Backend server:

nodemon index.js

# Frontend Setup

cd ToDo

npm install

npm run dev

-------------------------------------------------------------------------


## Learning Outcomes

This project helped in understanding:

- > React state & controlled inputs
- > useEffect and component lifecycle
- > REST API design
- > CRUD operations with PostgreSQL
- > Frontend <--> Backend communication
- > Bootstrap modals in React
- > Real-world debugging & development workflow

## Future Improvements:

Authentication (Login / Signup)

Better UI with Tailwind-only styling

Optimistic UI updates

Deployment (Vercel + Render)

