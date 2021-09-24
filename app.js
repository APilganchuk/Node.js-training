const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Main");
});
app.get("/about", (request, response) => {
  response.send(`${request.method}`);
});

app.listen(3000);
