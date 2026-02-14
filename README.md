# URL Shortener

A full-stack URL shortener application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- Shrink long URLs into short, shareable links.
- Redirect users to the original URL when they visit the short link.
- Track click analytics (views).

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express, MongoDB

## Prerequisites
- Node.js installed
- MongoDB Atlas connection string (or local MongoDB)

## Setup Instructions

### 1. Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Ensure you have a `.env` file in `Backend/` with:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     BASE_URL=http://localhost:5000
     ```
     *(Note: Ensure your IP is whitelisted in MongoDB Atlas if using a cloud database)*
4. Start the server:
   ```bash
   npm run start
   ```
   You should see: `Server connected to Database!` and `Server is running on PORT: 5000`.

### 2. Frontend Setup
1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`.

## Deployment
- **Backend**: Can be deployed to Render, Railway, or Vercel.
- **Frontend**: Can be deployed to Vercel or Netlify.
- *Note: If deploying, remember to update the API URL in `Frontend/src/component/Urlshortner.jsx` to points to your deployed backend URL.*
