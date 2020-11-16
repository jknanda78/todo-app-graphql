import { RESTDataSource } from "apollo-datasource-rest";

export default class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://local.dev.com:4000/v1/";
  }

  getAllTodos = async () => {
    const todos = await this.get("todos");
    return Array.isArray(todos) && todos.length ? todos : [];
  }

  addTodo = async ({ summary }) => {
    console.log("todo.ds:::", summary);
    const todos = await this.post("todos", { summary });
    return Array.isArray(todos) && todos.length ? todos : [];
  }
};
