module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    // Login User
    router.post("/login", users.login);
  
    // Create a new User
    router.post("/register", users.create);
  
    app.use('/api/auth', router);
  };