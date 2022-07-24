module.exports = app => {
    const Events = require('../controllers/event.controller');

    app.get('/events', Events.findAll);

    app.get('/events/recent/:count', Events.findRecentEvents);

    app.get('/events/name/:name', Events.findEvents);

    app.get('/events/id/:id', Events.findEventById);
}