const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    let chooseBurger = {
      burgers: data,
    };
    console.log(chooseBurger);
    res.render("index", chooseBurger);
  });
});

router.post("/burgers", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    console.log(result);
    res.status(200).end();
  });
});


// Export routes for server.js to use.
module.exports = router;