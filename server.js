const express = require("express");
const colors = require("./colors.json");
const shapes = require("./shapes.json");

const app = express();
const port = 3000;

app.get("/colors", (req, res) => {
  res.json(colors);
});

app.get("/shapes", (req, res) => {
  res.json(shapes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
