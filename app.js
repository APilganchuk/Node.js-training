const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");
const contacts = require("./db/contacts.json");

const app = express();
app.use(cors());

app.use(async (req, res, next) => {
  try {
    const { method, url } = req;
    const date = moment().format("DD.MM.YY._hh:mm:ss");
    const text = `${method} ${url} ${date}`;
    await fs.appendFile("db/server.log", `${text}\n`);
    next();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.post("/contacts", (req, res) => {
  res.json({
    status: "success",
    message: `Contacts add `,
  });
});
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});
app.listen(3000);
