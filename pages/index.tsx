import React from "react";
import TodoList from "../components/todo-list";

type TodoProps = {};

export default class TodoComponent extends React.Component<TodoProps> {
  render() {
    return (
      <div>
        <main>
          <header>
            <h1>Todo App</h1>
          </header>
          <section>
            <form>
              <p>
                <label htmlFor="todo"></label>
                <input type="text" name="todo" required />
              </p>
              <p>
                <button type="submit" value="Add">Add</button>
              </p>
            </form>
          </section>
          <section>
            <TodoList />
          </section>
        </main>
      </div>
    )
  }
}
