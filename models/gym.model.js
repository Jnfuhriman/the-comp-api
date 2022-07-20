const sql = require('./db');

const Gym = function(gym) {
    this.name = gym.name;
    this.address = gym.address;
    this.phone = gym.phone;
}

Gym.getAll = (result) => {
    let queryString = `SELECT * FROM Gym`;
    sql.query(queryString, (err, res) => {
        if(err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
}

module.exports = Gym;