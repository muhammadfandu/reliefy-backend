module.exports = app => {
    const authToken = require('../utilities/accessToken.js')
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", authToken.authenticateToken, users.create);
  
    // Retrieve all Users
    router.get("/", authToken.authenticateToken, users.findAll);
  
    // Retrieve all active Users
    router.get("/active", authToken.authenticateToken, users.findAllActive);
  
    // Retrieve a single User with id
    router.get("/:id", authToken.authenticateToken, users.findOne);
  
    // Update a User with id
    router.put("/:id", authToken.authenticateToken, users.update);
  
    // Delete a User with id
    router.delete("/:id", authToken.authenticateToken, users.delete);
  
    // Create a new User
    router.delete("/", authToken.authenticateToken, users.deleteAll);
  
    app.use('/api/users', router);
  };