module.exports = app => {
    const trail = require("../controllers/trail.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Trail
    router.post("/", trail.create);
  
    // Retrieve all Trails
    router.get("/", trail.findAll);
  
    // Retrieve a single Trail with id
    router.get("/:id", trail.findOne);
  
    // Update a Trail with id
    router.put("/:id", trail.update);
  
    // Delete a Trail with id
    router.delete("/:id", trail.delete);
  
    // Delete all trails
    router.delete("/", trail.deleteAll);
  
    app.use('/api/trail', router);
  };