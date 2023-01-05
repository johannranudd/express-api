const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT);

app.get("/", (req, res) => {
  res.send({ message: "ello mate!" });
});
