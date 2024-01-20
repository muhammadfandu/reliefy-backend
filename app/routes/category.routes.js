module.exports = app => {
  const authToken = require('../utilities/accessToken.js')
  const categories = require("../controllers/category.controller.js");
  var router = require("express").Router();

  // Create a new Category
  router.post("/", authToken.authenticateToken, categories.create);

  // Retrieve all Categories
  router.get("/", authToken.authenticateToken, categories.findAll);

  // Retrieve a single Category with id
  router.get("/:id", authToken.authenticateToken, categories.findOne);

  // Update a Category with id
  router.put("/:id", authToken.authenticateToken, categories.update);

  // Delete a Category with id
  router.delete("/:id", authToken.authenticateToken, categories.delete);

  // Create a new Category
  router.delete("/", authToken.authenticateToken, categories.deleteAll);

  app.use('/api/categories', router);
};