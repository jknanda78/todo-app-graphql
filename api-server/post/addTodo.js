const { addTodo } = require("../db/models");

exports.addTodo = (request, response) => {
  return addTodo(request)
    .then(() => {
      response
        .status(200)
        .send({message: "added successfully!!"});
    })
    .catch((err) => response.status(404).send(err))
};
