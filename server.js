const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
const blogRoute = require("./routes/blogRoute");

// TO ACCESS DATA PASSED FROM FORMS
app.use(express.urlencoded({ extended: true }));

app.listen(3000); //LISTENING TO localhost:3000 (localhost port 3000)

// POSTING JSON INFORMATION TO SERVER
app.use(express.json()) //applicable when making a fetch request from client to my server

// LOAD STATIC FILES
//public is the folder where all static files are (static, not dynamic, contents don't change)
app.use(express.static("public"));

app.set("view engine", "ejs"); //SETTING UP VIEW ENGINE

// CALLING MIDDLE FUNCTION logger
// works on very endpoint since on top
// app.use(logger)

app.get("/", logger, (req, res) => {
  //can use middleware on individual endpoints - app.get("/", logger, (req, res)

  // app.get("/", logger, logger (req, res) => {
  // can use more than one middleware in an endpoint 

  console.log("Here");

  // WHAT YOU CAN DO WITH "res" parameter
  // res.send("Hi") //SEND TEXT TO BROWSER

  // res.sendStatus(500) //SEND RESPONSE STATUS TO BROWSER, 500(ERROR ON SERVER)

  // res.status(200).send("Hi") //SEND TEXT TO BROWSER WITH STATUS 200(SUCCESS)

  // res.json({ message: "Error" }); //SEND ACTUAL JSON TO BROWSER/CLIENT

  // res.download("server.js"); //DOWNLOAD FILE

  // res.render("index"); //RENDER VIEW FILE TO BROWSER/CLIENT, MAKE SURE TO USE A VIEW ENGINE

  res.render("index", { text: "World" }); //RENDER VIEW FILE TO BROWSER/CLIENT, and SEND DATA TO VIEW
});

// USERS ROUTES, LINK ROUTES TO APP
app.use("/users", usersRoutes);

// BLOG ROUTE, LINK ROUTES TO APP
app.use("/blogs", blogRoute);

// OUR OWN MIDDLEWARE FUNCTION SAMPLE = logger
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// ROUTE FOR NAME FORM
app.get("/name-form", (req, res) => {
  res.render("name-form", { placeholder: "Write your name" });
});

// ROUTE FOR SUBMIT NAME FORM
app.post("/name-form", (req, res) => {
  res.send("Name submitted!");
});
