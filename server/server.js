const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const todoRoute = require('./routes/todoRoute');
// middlewares
app.use(cors());
app.use(bodyParser.json());

// connect to db
mongoose.connect(
  "mongodb+srv://Uttam:test123@cluster0.enmab.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database is connected");
  app.listen(port, () => {
    console.log("Server has Started...");
  });
});

// routes
app.use('/todo',todoRoute);
