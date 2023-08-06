const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ message: "This text came from API !" });
});

app.get("/api", (req, res) => {
  res.send({ message: "API 02" });
});

app.listen(port, () => {
  console.log(`Dummy API running at http://localhost:${port}`);
});
