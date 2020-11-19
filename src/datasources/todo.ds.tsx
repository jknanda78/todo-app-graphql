import { RESTDataSource } from "apollo-datasource-rest";

export default class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://local.dev.com:4000/v1/";
  }

  todos = async () => {
    const todos = await this.get("todos");
    return Array.isArray(todos) && todos.length ? todos : [];
  }

  addTodo = async ({ summary }) => {
    const response = await this.post("addTodo", { summary });
    return response;
  }
};
