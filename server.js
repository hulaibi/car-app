const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
require("dotenv").config();

const db = require("./db");
const authRouter = require("./routes/authRouter.js");
const userRouter = require("./routes/userRouter.js");
const carRouter = require("./routes/carRouter.js");
const tranRouter = require("./routes/tranRouter.js");
const path = require("path");

const PORT = process.env.PORT ? process.env.PORT : 4000;

const app = express();

app.use(express.static("styles"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));

app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null; 
  next();
});

const sessionauth = (req, res, next) => {
  // Allow public routes without authentication
  if (req.path.startsWith("/auth") || req.path === "/") {
    return next();
  }
  
  if (!req.session.user) {
    return res.redirect("/auth/sign-in");
  }
  next();
};

app.use(sessionauth);

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/cars", carRouter);
app.use("/transactions", tranRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Running Server on Port ${PORT} . . . `);
});
