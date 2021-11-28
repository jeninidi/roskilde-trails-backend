const db = require("../models");
const Trail = db.trail;
const Op = db.Sequelize.Op;

// Create and Save a new Trail
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

// Create a Trail
  const trail = {
    name: req.body.name,
    length: req.body.length,
    description: req.body.description,
    completionTime: req.body.completionTime,
    est_time: req.body.est_time,
    category: req.body.category,
    trail_pic: req.body.trail_pic,
    rating: req.body.rating
  };  

// Save Trail in the database
  Trail.create(trail)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trail."
      });
    });
};

// Retrieve all Trails from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Trail.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trails."
        });
      });
};

// Find a single Trail with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Trail.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Trail with id=" + id
        });
      });
  
};

// Update a Trail by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Trail.update(req.body, {
      where: { id: id }
    })
      .then(num => {
          //if 1 row was updated 
        if (num == 1) {
          res.send({
            message: "Trail was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Trail with id=${id}. Maybe Trail was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Trail with id=" + id
        });
      });
};

// Delete a Trail with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Trail.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trail was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Trail with id=${id}. Maybe Trail was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Trail with id=" + id
        });
      });
};
// Delete all Trails from the database.
exports.deleteAll = (req, res) => {
    Trail.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Trails were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all trails."
          });
        });
};





