const express = require("express");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("first request is cmmmitn");
});
app.get("/chats", (req, res) => {
  res.send(chats);
});
app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
