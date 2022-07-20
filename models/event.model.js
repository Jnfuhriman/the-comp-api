const sql = require('./db');

const Event = function(event) {
    this.name = event.name;
    this.date = event.date;
    this.description = event.description;
}

Event.getAll = (result) => {
    let queryString = `select Event.name as eventName, Event.date, Event.description, Gym.name as gymName From Event inner join Gym on Event.gymId = Gym.id;`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

module.exports = Event;