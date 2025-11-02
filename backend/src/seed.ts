import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Add some sweets
  await prisma.sweet.createMany({
    data: [
      {
        name: "Gulab Jamun",
        description: "Soft and delicious Indian sweet made with milk solids.",
        price: 50,
        category: "Indian Dessert",
        quantity: 20,
        imageUrl: "backend\public\gulab-jamun.jpeg",
      },
      {
        name: "Rasgulla",
        description: "Spongy syrupy balls made from chenna and sugar syrup.",
        price: 40,
        category: "Indian Dessert",
        quantity: 25,
        imageUrl: "backend\public\Rasgulla1.jpg",
      },
      {
        name: "Ladoo",
        description: "Sweet round balls made from flour and ghee.",
        price: 30,
        category: "Traditional Sweet",
        quantity: 15,
        imageUrl: "backend\public\laddoo.jpg",
      },
    ],
  });

  console.log("✅ Sweets seeded successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
    prisma.$disconnect();
  });
