import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     email: "test@test.com",
  //     firstName: "kari",
  //     lastName: "nordmann",
  //     password: "myPassword",
  //   },
  // });
  // console.log(user);
  const users = await prisma.user.findMany();
  console.log(users);
  // const users = await prisma.user.deleteMany();
  // console.log(users);
  // const listing = await prisma.listing.create({
  //   data: {
  //     title: "my first listing",
  //     tags: ["1", "2"],
  //     description: "description",
  //     requirements: ["HTML", "CSS", "JS"],
  //     deadline: new Date(),
  //     created: new Date(),
  //     updated: new Date(),
  //     user: "60fe89e2-6f64-4aaf-885c-177999443e0e",
  //     userUuid: "60fe89e2-6f64-4aaf-885c-177999443e0e",
  //   },
  // });
  // console.log(listing);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
