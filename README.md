URL Shortener – Full Stack Web Application

A full stack URL Shortener application that converts long URLs into short, shareable links with fast redirection.
Built using React, Node.js, and Express with a clean backend and responsive frontend.

--------------------------------------------------

FEATURES
- Convert long URLs into short URLs
- Fast redirection to original URLs
- REST API based architecture
- Clean and responsive UI
- Modular backend structure
- Environment based configuration

--------------------------------------------------

TECH STACK

Frontend:
- React (Vite)
- Tailwind CSS
- JavaScript

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)

Tools:
- Git & GitHub
- Vercel
- VS Code

INSTALLATION AND SETUP

1. Clone the repository
git clone https://github.com/AjinkyaGobade/URL-shortener.git
cd URL-shortener

2. Backend setup
cd Backend
npm install

Create a .env file inside Backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000

Start backend server:
npm start

3. Frontend setup
cd Frontend
npm install
npm run dev

Open browser at:
http://localhost:5173

--------------------------------------------------

HOW IT WORKS

1. User enters a long URL
2. Frontend sends request to backend API
3. Backend generates a unique short code
4. URL is stored in database
5. Short URL redirects to original URL

--------------------------------------------------

SAMPLE API ENDPOINTS

POST  /api/url     - Generate short URL
GET   /:shortId    - Redirect to original URL

--------------------------------------------------

FUTURE ENHANCEMENTS

- User authentication
- Custom short URLs
- URL expiry feature
- Click analytics
- QR code generation

--------------------------------------------------

AUTHOR

Ajinkya Gobade
Computer Science Engineering Student
Aspiring Software Engineer

GitHub: https://github.com/AjinkyaGobade

--------------------------------------------------

If you like this project, give it a star on GitHub.
