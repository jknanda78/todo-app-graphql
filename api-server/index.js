const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const colors = require("colors");
// defining endpoints
const routes = require("./routes").routes;
// defining the Express app
const app = express();
// defining port
const PORT = process.env.PORT || 4000;

// adding Helmet to enhance your API"s security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining all api/endpoints
routes(app);

// starting the server
app.listen(PORT, () => {
  console.log(
    `\n ${colors.green("API Server endpoints listening on port 4000")} \n`
  );
});
