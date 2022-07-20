module.exports = app => {
    const Gyms = require('../controllers/gym.controller');

    app.get('/gyms', Gyms.findAll);
}