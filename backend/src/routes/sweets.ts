import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Get all sweets
router.get("/", async (req, res) => {
  try {
    const sweets = await prisma.sweet.findMany();
    res.json(sweets);
  } catch (error) {
    console.error("Error fetching sweets:", error);
    res.status(500).json({ error: "Failed to fetch sweets" });
  }
});

// ✅ Get single sweet by ID
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const sweet = await prisma.sweet.findUnique({
      where: { id },
    });

    if (!sweet) {
      return res.status(404).json({ error: "Sweet not found" });
    }

    res.json(sweet);
  } catch (error) {
    console.error("Error fetching sweet:", error);
    res.status(500).json({ error: "Failed to fetch sweet details" });
  }
});


// ✅ "Buy" a sweet
router.post("/buy/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { quantity } = req.body;

  try {
    const sweet = await prisma.sweet.findUnique({
      where: { id },
    });

    if (!sweet) {
      return res.status(404).json({ error: "Sweet not found" });
    }

    if (sweet.quantity < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    // Optional: update stock
    const updated = await prisma.sweet.update({
      where: { id },
      data: { quantity: sweet.quantity - quantity },
    });

    return res.json({
      message: `You bought ${quantity} ${sweet.name}(s)!`,
      sweet: updated,
    });
  } catch (error) {
    console.error("Error in buying sweet:", error);
    res.status(500).json({ error: "Failed to process purchase" });
  }
});


export default router;
