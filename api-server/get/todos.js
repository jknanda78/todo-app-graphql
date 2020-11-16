const { getAllTodos } = require("../db/models");
exports.todos = (request, response) => {
  return getAllTodos()
    .then((todos) => {
      response
        .status(200)
        .send(todos);
    })
    .catch((err) => response.status(404).send(err))
};
