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
    Event.findEvents( name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || `Some error occurred while retrieving event with the name ${ name }`
        });
      else {
        if(data.length == 0){
            Event.findEventsByGym(name, (err, data) => {
                if(err)
                res.status(500).send({
                    message:
                        err.message || `Some error occurred while retrieving event by the following gym: ${ name }`
                })
                else res.send(data);
            })
        } else{
            res.send(data);
        }
      }
      
    });
  };