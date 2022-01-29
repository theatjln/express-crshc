const express = require("express");
const router = express.Router();

const usersIndex = (req, res) => {
  // ACCESSING QUERY PARAMETER e.g. localhost:3000/users?name=Liz
  console.log("query parameter: ", req.query.name);

  res.send("User List");
};
 
/* const userCreateGet = (req, res) => {
  res.render("users/new", { placeholder: "Enter your username here..." });
};


// submit form
const userCreatePost = (req, res) => {
  console.log(users);
  const isValid = true;
  if (isValid) {
    users.push({ username: req.body.username });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { username: req.body.username });
  }
}; */



 

// update single user (dynamic route/router parameter)
const userUpdate = (req, res) => {
  const id = req.params.id;
  console.log(req.user);
  res.send(`Update User Details for User-${id}, Username: ${req.user.name}`);
};

// delete single user (dynamic route/router parameter)
const userDelete = (req, res) => {
  const id = req.params.id;
  console.log(req.user);
  res.send(`Delete User-${id}, Username: ${req.user.name}`);
};

module.exports = {
  usersIndex,  
  userUpdate,
  userDelete,
};
