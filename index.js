const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the show. Strap in and let's kick it." });
});

// require("./app/routes/team.routes.js")(app);
// require("./app/routes/player.routes.js")(app);
// require("./app/routes/coach.routes.js")(app);
require('./routes/gym.route')(app);
require('./routes/event.route')(app);

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
  console.log("http://localhost:8080/");
});