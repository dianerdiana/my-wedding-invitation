import { hashPassword } from "./../src/libs/password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword("123456");

  await prisma.user.createMany({
    data: [
      {
        fullName: "Dian Erdiana",
        username: "dianerdiana",
        password: hashedPassword,
      },
      {
        fullName: "Dede Delisa",
        username: "dd_delisa",
        password: hashedPassword,
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
