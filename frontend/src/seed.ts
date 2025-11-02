import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.sweet.create({
    data: {
      name: "Gulab Jamun",
      description: "Soft and delicious Indian sweet made with milk solids",
      price: 50,
      category: "Indian Dessert",
      quantity: 20,
      imageUrl: "/images/gulab-jamun.jpg",
    },
  });

  console.log("✅ Sweet added successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
