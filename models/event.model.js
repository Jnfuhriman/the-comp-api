const sql = require('./db');

const Event = function(event) {
    this.name = event.name;
    this.date = event.date;
    this.description = event.description;
    this.gym = event.gymName;
    this.startTime = event.startTime;
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

Event.getRecentEvents = (count, result) => {
    let queryString = `select Event.id, Event.name as eventName, Event.date, Event.description, Event.startTime, Gym.name as gymName From Event inner join Gym on Event.gymId = Gym.id order by Event.id desc limit 0,${count};`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Event.findEventsByEventName = (name, result) => {
    let queryString = `select Event.id, Event.name as eventName, Event.date, Event.description, Event.startTime, Gym.name as gymName From Event inner join Gym on Event.gymId = Gym.id where Event.name like "%${name}%";`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Event.findEventsByGymName = (name, result) => {
    let queryString = `select Event.id, Event.name as eventName, Event.date, Event.description, Event.startTime, Gym.name as gymName From Event inner join Gym on Event.gymId = Gym.id where Gym.name like "%${name}%";`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Event.findEventById = (id, result) => {
    let queryString = `select Event.id, Event.name as eventName, Event.date, Event.description, Event.startTime, Gym.name as gymName From Event inner join Gym on Event.gymId = Gym.id where Event.id = ${id};`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

module.exports = Event;