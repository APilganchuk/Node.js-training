const express = require("express");
const path = require("path");
const imgPath = path.join(__dirname, "img/demo.jpg");

const app = express();

const PORT = 3030;

app.get("/img", (req, res) => {
  res.sendFile(imgPath);
});

app.get("/w", (req, res) => {
  res.send("Hello world");
});
app.get("/", (req, res) => {
  res.json({ a: 2 });
});
app.use((req, res) => {
  res.json("middleware");
});


app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error ${err.message}`);
  }
  console.log(`Run port ${PORT}`);
});
