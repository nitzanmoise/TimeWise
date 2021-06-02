/**
 * Required External Modules
 */
const path = require('path');
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");


/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../../build')));

console.log(path.join(__dirname, '../../build'));
console.log(path.join(__dirname, '../../build', 'index.html'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html')); //serving build folder
});


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);








