//jshint esversion:6
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/anonDB", {
  useNewUrlParser: true
});


//Create Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


userSchema.plugin(encrypt, {secret:process.env.SECRET,encryptedFields:["password"]});

const User = new mongoose.model("User", userSchema);

//GET Method
//Send user back signup page when they go to HOME route
app.get("/", function(req, res) {
  res.render("home");
});

//GET Method
//Send user back signup page when they go to HOME route
app.get("/login", function(req, res) {
  res.render("login");
});

//GET Method
//Send user back signup page when they go to HOME route
app.get("/signup", function(req, res) {
  res.render("signup");
});

app.post("/signup", function(req, res) {
  console.log(req.body.email);
  console.log(req.body.pass);

  //Add user to database
  const newUser = new User({
    email: req.body.email,
    password: req.body.pass
  });

  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.render("page");
    }
  });
});

app.post("/login", function(req, res) {
  const username = req.body.email;
  const password = req.body.pass;
console.log("kk");
  User.findOne({
    email:username
  }, function(err, foundUser) {
    if (err) {
      console.log("user not found");
    } else {
      if (foundUser) {
        if(foundUser.password === res.render("page"));
      }
    }
  });
});



app.listen(3000, function() {
  console.log("server is spinnin up");
});
