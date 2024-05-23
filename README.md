
## Build a basic version of PayTM
# MERN-Paytm-simple

# Basic Paytm Clone
This project is a basic version of the Paytm application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The application includes functionalities for user signup, signin, viewing balances, viewing all users, and sending money between users.

# Features
- User Signup
- User Signin
- View Account Balance
- View All Users
- Send Money to Other Users
  
# Technologies Used
- MongoDB
- Express.js
- React
- Node.js
  
# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
Make sure you have the following installed on your system:

-Node.js
-npm (Node Package Manager)
-MongoDB

# Installation

Clone the repository:

bash
Copy code
git clone https://github.com/lakshya-26/MERN-Paytm-simple.git
cd paytm-clone
Install server dependencies:

bash
Copy code
cd backend
npm install
Install client dependencies:

bash
Copy code
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the server directory with the following content:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the server:

bash
Copy code
cd ../backend
npm start
Run the client:

Open a new terminal window and run:

bash
Copy code
cd frontend
npm start
The application should now be running on http://localhost:____.

# API Endpoints
Auth Routes
POST /api/v1/user/signup - Sign up a new user
POST /api/v1/user/signin - Sign in an existing user
User Routes
GET /api/v1/users/bulk - Get all users
GET /api/v1/accounts/balance - Get the balance of a user by ID
Transaction Routes
POST /api/v1/accounts/transfer - Send money from one user to another

# Folder Structure
php
Copy code
paytm-clone/
├── frontend/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── pages/          # React pages
│       ├── App.jsx
│       └── index.jsx
├── backend/                 # Express backend
│   ├── routes/             # Express routes
│   ├── config.js
│   └── db.js
│   └── index.js
│   └── middlewares.js
├── .gitignore
├── README.md
└── package.json

# Acknowledgements
MongoDB
Express.js
React
Node.js
