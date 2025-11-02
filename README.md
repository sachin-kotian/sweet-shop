# 🍬 Sweet Shop Web Application

A full-stack **Sweet Shop Management System** built with **React (Vite)**, **Express.js**, **Prisma ORM**, and **SQLite/PostgreSQL**.  
This project allows users to browse, view details, and purchase traditional Indian sweets, with real-time data updates powered by Prisma.

---

## 🚀 Features

- 🏠 **Home Page** – Displays a list of all available sweets with images, names, descriptions, and prices.  
- 🔍 **Sweet Details Page** – Shows detailed information (category, quantity, etc.) for each sweet.  
- 🛒 **Buy Page** – Lets users purchase sweets with dynamic quantity selection and validation.  
- 🧮 **Quantity Management** – Updates and validates available quantity automatically in the database.  
- 🗄️ **Backend API Integration** using Express.js + Prisma.  
- 💾 **Database** – Managed using Prisma ORM with SQLite (or PostgreSQL).  
- ⚙️ **Prisma Studio** for easy visual database access.  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite), JavaScript, HTML, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite (via Prisma ORM) |
| **ORM** | Prisma |
| **Runtime** | Node.js |
| **Package Manager** | npm |

---

## 📂 Project Structure



sweetshop/
│
├── backend/
│ ├── src/
│ │ ├── index.ts # Main Express server
│ │ ├── routes/ # API route handlers
│ │ ├── prisma/ # Prisma schema and client
│ ├── package.json
│ ├── prisma/
│ │ ├── schema.prisma # Prisma data model
│
├── frontend/
│ ├── src/
│ │ ├── components/ # React components (SweetList, SweetDetail, BuyPage)
│ │ ├── pages/ # Individual pages
│ │ ├── App.jsx
│ ├── package.json
│ ├── vite.config.js
│
└── README.md


---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash

git clone https://github.com/your-username/sweetshop.git
cd sweetshop

2️⃣ Backend Setup
cd backend
npm install


Create your Prisma database:

npx prisma migrate dev --name init
npx prisma studio


Run the server:

npm run dev


Server runs on http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on http://localhost:5173

📸 Screenshots
🗂️ Prisma Studio

Manage sweets directly through Prisma Studio.


🖥️ Backend Running

Backend successfully running on port 5000.


🏪 Sweet Shop Home

Displays all available sweets with prices and descriptions.


🍬 Sweet Details

View full details of selected sweet.


💸 Buy Page

Confirm purchase with quantity selection and validation.


✅ Purchase Confirmation

Purchase confirmation alert.


❌ Purchase Error

Validation error if purchase exceeds available quantity.


🧑‍💻 API Endpoints
Method	Endpoint	Description
GET	/api/sweets	Get all sweets
GET	/api/sweets/:id	Get a specific sweet
POST	/api/sweets/:id/buy	Purchase a sweet
POST	/api/users/register	Register a new user
POST	/api/users/login	User login
🗃️ Prisma Schema Example
model Sweet {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  price       Int
  category    String
  quantity    Int
  imageUrl    String
  createdAt   DateTime @default(now())
}

model User {
  id       Int      @id @default(autoincrement())
  name     String
  email    String   @unique
  password String
}

💡 Future Enhancements

🧍‍♂️ User Authentication (JWT or Session)

🛍️ Cart System

📦 Order History

🖼️ Cloud-based image storage

🎨 Improved UI with TailwindCSS

🧑‍🏫 Author

Sachin Kotian
📧 [your-email@example.com
]
💼 GitHub: github.com/your-username

📜 License

This project is licensed under the MIT License
.

🧁 “Delight your taste buds with a full-stack experience!”

---

Would you like me to tailor this README for **PostgreSQL deployment on Render** or **SQLite for local development**?  
That will help finalize the setup instructions (database connection and `.env` details).

