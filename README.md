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

<img width="801" height="768" alt="Screenshot (186)" src="https://github.com/user-attachments/assets/46730cce-8e1b-430c-bceb-aa19bc2b74db" />


---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository


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

<img width="1877" height="561" alt="Screenshot (179)" src="https://github.com/user-attachments/assets/bcc7a326-4f7f-4229-afa3-c35f12b07beb" />


Manage sweets directly through Prisma Studio.


🖥️ Backend Running
<img width="1920" height="561" alt="Screenshot (180)" src="https://github.com/user-attachments/assets/20bb3e15-9dbb-40eb-b66d-8e495235295c" />


Backend successfully running on port 5000.


🏪 Sweet Shop Home
<img width="1920" height="1080" alt="Screenshot (181)" src="https://github.com/user-attachments/assets/7e08c747-a98c-4843-9b60-11314643f13e" />

Displays all available sweets with prices and descriptions.


🍬 Sweet Details
<img width="1920" height="1080" alt="Screenshot (182)" src="https://github.com/user-attachments/assets/897d0733-ded7-4d35-966e-0be7634a21f4" />

View full details of selected sweet.


💸 Buy Page
<img width="1920" height="1080" alt="Screenshot (183)" src="https://github.com/user-attachments/assets/0fda04fb-e986-42b2-9814-c19d91745bd4" />

Confirm purchase with quantity selection and validation.


✅ Purchase Confirmation
<img width="1920" height="1080" alt="Screenshot (184)" src="https://github.com/user-attachments/assets/a3b33b61-4587-4b45-997a-71af04a427e7" />

Purchase confirmation alert.


❌ Purchase Error
<img width="1920" height="1080" alt="Screenshot (185)" src="https://github.com/user-attachments/assets/bf898c0a-e60a-4ae1-935e-a01aad109918" />

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

