module.exports = app => {
    const Events = require('../controllers/event.controller');

    app.get('/events', Events.findAll);
}