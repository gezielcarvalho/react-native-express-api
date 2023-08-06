const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ message: "This text came from API !" });
});

app.get("/api", (req, res) => {
  res.send({ message: "Hello World From API!!!!" });
});

app.listen(port, () => {
  console.log(`Dummy API running at http://localhost:${port}`);
});
