const Event = require('../models/event.model');

exports.findAll = (req, res) => {
    Event.getAll( (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving events."
        });
      else res.send(data);
    });
  };

exports.findRecentEvents = (req, res) => {
    Event.getRecentEvents( req.params.count, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving events."
        });
        else res.send(data);
    });
};

exports.findEvents = (req, res) => {
    let name = req.params.name.replace(/-/,' ');
    Event.findEventsByEventName( name, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving events."
        });
        else {
            if(data.length == 0) {
                Event.findEventsByGymName(name, (err, data) => {
                    if(err)
                    res.status(500).send({
                        message:
                        err.message || "Some error occured while retrieving events."
                    });
                    else res.send(data);
                });
            } else res.send(data);
        }
    });
};

exports.findEventById = (req, res) => {
    Event.findEventById( req.params.id, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving event."
        });
        else res.send(data);
    });
};