const express = require("express");
const Handlebars = require("handlebars");
const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
 }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const collectionRoutes = require("./controllers/collectionController.js");
const userRoutes = require("./controllers/userController.js");
app.use(collectionRoutes);
app.use(userRoutes);

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/api/config", function (req, res) {
  res.json({
    success: true,
  });
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
