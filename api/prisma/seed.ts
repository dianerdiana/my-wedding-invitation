import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Dian Erdiana",
        username: "dianerdiana",
        password: "123456",
      },
      {
        fullName: "Dede Delisa",
        username: "dd_delisa",
        password: "123456",
      },
    ],
  });

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
