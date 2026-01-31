\# 🔗 URL Shortener – Full Stack Web Application



A modern \*\*Full Stack URL Shortener\*\* application that converts long URLs into short, shareable links with fast redirection.  

Built using \*\*React + Node.js + Express\*\* with a clean backend architecture and responsive frontend UI.



This project demonstrates \*\*REST API design, MVC architecture, database integration, and frontend–backend communication\*\*.



---



\## ✨ Features



\- 🔹 Convert long URLs into short URLs

\- 🔹 Fast redirection to original URLs

\- 🔹 RESTful API design

\- 🔹 Clean and responsive UI

\- 🔹 Modular backend architecture

\- 🔹 Environment-based configuration

\- 🔹 Production-ready folder structure



---



\## 🛠️ Tech Stack



\### Frontend

\- React (Vite)

\- Tailwind CSS

\- JavaScript



\### Backend

\- Node.js

\- Express.js

\- MongoDB (Mongoose)



\### Tools

\- Git \& GitHub

\- Vercel

\- VS Code



---



\## 📂 Project Structure



URL-shortener/

│

├── Backend/

│ ├── src/

│ │ ├── controllers/

│ │ ├── routes/

│ │ ├── models/

│ │ ├── db/

│ │ ├── utils/

│ │ ├── config/

│ │ ├── environment/

│ │ ├── app.js

│ │ └── server.js

│ ├── package.json

│ └── vercel.json

│

├── Frontend/

│ ├── src/

│ │ ├── component/

│ │ ├── Api/

│ │ ├── App.jsx

│ │ ├── main.jsx

│ │ └── index.css

│ ├── index.html

│ ├── package.json

│ └── vite.config.js

│

└── README.md



yaml

Copy code



---



\## ⚙️ Installation \& Setup



\### 1️⃣ Clone Repository

```bash

git clone https://github.com/AjinkyaGobade/URL-shortener.git

cd URL-shortener

2️⃣ Backend Setup

bash

Copy code

cd Backend

npm install

Create .env file inside Backend/:



env

Copy code

PORT=5000

MONGO\_URI=your\_mongodb\_connection\_string

BASE\_URL=http://localhost:5000

Start backend server:



bash

Copy code

npm start

3️⃣ Frontend Setup

bash

Copy code

cd Frontend

npm install

npm run dev

Open in browser:



arduino

Copy code

http://localhost:5173

🔄 How It Works

User enters a long URL



Frontend sends request to backend API



Backend generates a unique short code



URL mapping is stored in the database



Short URL redirects to the original URL



📌 Sample API Endpoints

Method	Endpoint	Description

POST	/api/url	Generate short URL

GET	/:shortId	Redirect to original URL



📈 Future Enhancements

User authentication



Custom short URLs



URL expiry feature



Click analytics dashboard



QR code generation



🎯 Learning Outcomes

REST API development



MVC backend architecture



Frontend–backend integration



Environment variable handling



Full-stack deployment workflow



👤 Author

Ajinkya Gobade

Computer Science \& Engineering Student

Aspiring Software Engineer



GitHub: https://github.com/AjinkyaGobade

