const Gym = require('../models/gym.model');

exports.findAll = (req, res) => {
    Gym.getAll( (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving gyms."
        });
      else res.send(data);
    });
  };