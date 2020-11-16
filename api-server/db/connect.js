const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://local.dev.com:27017";

// Connect to mongodb
exports.connectDB = () =>
  MongoClient.connect(connectionURL, {}).then((client) => client);
 