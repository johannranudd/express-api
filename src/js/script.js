import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT);

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  const listings = await prisma.listing.findMany();
  res.send({
    data: {
      users: users,
      listings: listings,
    },
  });
});

app.get("/listings", async (req, res) => {
  const listings = await prisma.listing.findMany();
  res.send({
    data: {
      listings,
    },
  });
});

app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  // const { editedListing } = req.body;
  // const editedListing = {
  //   title: "my 5 listing",
  //   tags: ["1", "2"],
  //   description: "description",
  //   requirements: ["HTML", "CSS", "JS"],
  //   deadline: new Date(2023, 11, 17),
  //   created: new Date(),
  //   updated: new Date(),
  //   authorId: "1f916f3b-29cd-443f-bb5f-1edb29c08808",
  // };
  const listings = await prisma.listing.findUnique({
    where: {
      uuid: id,
    },
  });

  res.send({
    data: {
      listings,
    },
  });
});

app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listings = await prisma.listing.update({
    where: {
      uuid: id,
    },
    data: {
      uuid: id,
      ...req.body,
    },
  });
  res.send({
    data: {
      listings,
    },
  });
});

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     email: "ola@test.com",
  //     firstName: "ola",
  //     lastName: "nordmann",
  //     password: "myPassword",
  //   },
  // });
  // console.log(user);
  // const users = await prisma.user.findMany();
  // console.log(users);
  // console.log(users);
  // *listing
  // const listing = await prisma.listing.create({
  //   data: {
  //   title: "my second listing",
  //   tags: ["1", "2"],
  //   description: "description",
  //   requirements: ["HTML", "CSS", "JS"],
  //   deadline: new Date(2023, 11, 17),
  //   created: new Date(),
  //   updated: new Date(),
  //   // author: {
  //   //   connectOrCreate: users.map((user) => ({
  //   //     where: {
  //   //       user: "1f916f3b-29cd-443f-bb5f-1edb29c08808",
  //   //     },
  //   //     create: {
  //   //       user: "1f916f3b-29cd-443f-bb5f-1edb29c08808",
  //   //     },
  //   //   })),
  //   // },
  //   authorId: "1f916f3b-29cd-443f-bb5f-1edb29c08808",
  // },
  // });
  // const listings = await prisma.listing.findUnique({
  //   where: {
  //     uuid: "358d958b-6b8c-4eec-8252-655acb34310a",
  //   },
  // });
  // console.log(listings);
  // *end listing
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
