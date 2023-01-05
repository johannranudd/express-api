const app = require("express")();
const PORT = 5500;
// const express = require("express");
// const app = express();
// const PORT = 5500;

// app.use(express.json());

app.listen(PORT, () => {
  console.log(`alive on ${PORT}`);
});

app.get(`/tshirt`, (req, res) => {
  res.status(200);
  //   console.log("ello");
});

// .send({
//       tshirt: "red",
//       size: "large",
//     });
