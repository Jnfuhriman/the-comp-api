module.exports = app => {
    const Events = require('../controllers/event.controller');

    app.get('/events', Events.findAll);

    app.get('/recentEvents/:count', Events.findRecentEvents)

    app.get('/events/:name', Events.findEvents);
}