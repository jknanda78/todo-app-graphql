const { connectDB } = require("../connect");

// Get all todos from todos collection
exports.getAllTodos = () =>
  connectDB().then((client) => {
    const db = client.db("tododb");
    const todos = db.collection("todos");

    return todos.find({}).toArray().then((todos) => todos);
  });

// Add todo to todos collection
exports.addTodo = (summary) =>
  connectDB().then((client) => {
    const db = client.db("tododb");
    const todos = db.collection("todos");

    return todos.insert({
      summary
    });
  });
