const express = require("express");
const router = express.Router();

// ROUTER.PARAM()
router.get("/:id", (req, res) => {
  res.send(`Blog ${req.blog.name}`);
  console.log(req.blog);
});

const blogs = [{ name: "First Blog" }, { name: "Second Blog" }];
// function on a router - .param()
// function that runs anytime it finds a param that matches the name u pass in
// e.g. /:id, /:userId, /:blogId
router.param("id", (req, res, next, id) => {
  req.blog = blogs[id]; //you decide the name(e.g. users, blog, author, etc.)
  // you can access this req.user on any function that receives req (e.g. users controllers)

  next(); //param is a middleware so we use next()
  // middleware is a code that runs between the starting of the request and ending of the request
});

module.exports = router;
