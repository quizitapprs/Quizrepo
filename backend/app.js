const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
<<<<<<< HEAD
  "mongodb://quizadmin:quizadmin1@ds155461.mlab.com:55461/heroku_7cb674z4"
	//"mongodb://quizadmin:quizadmin1@ds255451.mlab.com:55451/quizdb"
    // "mongodb+srv://quizadmin:quizadmin@clusterqz-aklky.mongodb.net/quizdb"
=======
>>>>>>> b8362f9b274b7c3d51f542e73dc66693c679240a
    // "mongodb://localhost:27017/quizdb"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
app.use("/", express.static(path.join(__dirname, "angular")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});


module.exports = app;

