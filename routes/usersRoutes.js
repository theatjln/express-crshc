const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.usersIndex);

// FORM ROUTE
router.get("/new", (req, res) => {
  res.render("users/new", { placeholder: "Enter username here..." });
});

const users = [{ username: "Kyle" }, { username: "Sally" }];

// SUBMIT FORM ROUTE
router.post("/new", (req, res) => {
  console.log(req.body.username, "\nusers: ", users);
  const isValid = false
  if(isValid) {
    users.push({ username: req.body.username });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error!")
    res.render("users/new", {username: req.body.username})
  }
});

// get single user (dynamic route/router parameter)
// update single user (dynamic route/router parameter)
// delete single user (dynamic route/router parameter)
// --> use router.route("/:id").get().put().delete()
router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    console.log(req.user);
    res.send(`Get User Details for User-${id}`);
  })
  .put(usersController.userUpdate)
  .delete(usersController.userDelete);

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
