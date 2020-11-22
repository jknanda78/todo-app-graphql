const { connectDB } = require("../connect");
const ObjectID = require("mongodb").ObjectID;

// Get all todos from todos collection
exports.getAllTodos = () =>
  connectDB().then((client) => {
    const db = client.db("tododb");
    const todos = db.collection("todos");

    return todos.find({}).toArray().then((todos) => todos);
  });

// Add todo to todos collection
exports.addTodo = (request) =>
  connectDB().then((client) => {
    const db = client.db("tododb");
    const todos = db.collection("todos");
    const summary = request.body.summary;

    return todos.insert({
      summary
    });
  });

// Add todo to todos collection
exports.deleteById = (request) =>
  connectDB().then((client) => {
    const db = client.db("tododb");
    const todos = db.collection("todos");
    const _id = ObjectID(request.query.id);

    return todos.deleteOne({
      _id
    });
  });
