import express from "express";
import cors from "cors";
import path from "path";
import { PrismaClient } from "@prisma/client";
import sweetsRouter from "./routes/sweets";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../public")));
// ✅ Mount sweets route
app.use("/api/sweets", sweetsRouter);

// 🧁 Get all sweets
app.get("/api/sweets", async (req, res) => {
  try {
    const sweets = await prisma.sweet.findMany();
    res.json(sweets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sweets" });
  }
});

// ✅ Registration endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required" });

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    // Create new user
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});


// 🧠 Health check
app.get("/", (req, res) => res.send("✅ Backend running successfully!"));

// 🚀 Start server



app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
