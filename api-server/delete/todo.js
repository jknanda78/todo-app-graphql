const { deleteById } = require("../db/models");

exports.deleteTodo = (request, response) => {
    return deleteById(request)
    .then(() => {
      response
        .status(200)
        .send({message: "removed successfully!!"});
    })
    .catch((err) => response.status(404).send(err))
};
