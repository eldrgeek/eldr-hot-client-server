import express from 'express';

const app = express.Router();

app.get('/whoami', (req, res) => {
  console.log("WHO BBBB")
  res.send("You are a real winner");
});
app.get('/whoami', (req, res) => {
  console.log("WHO 2")
  res.send("You are quite OKQ");
});

module.exports = app;
