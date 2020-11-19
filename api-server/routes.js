const { todos } = require("./get/todos");
const { addTodo } = require("./post/addTodo");
const { deleteTodo } = require("./delete/todo");

exports.routes = (app) => {
  app.get("/v1/todos", todos);
  app.post("/v1/addTodo", addTodo);
  app.delete("/v1/todos/todoId", deleteTodo);
};
