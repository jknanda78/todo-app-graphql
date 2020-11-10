import React from "react";

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
            <ul>
              <li>Sample Todo <button type="submit" value="Remove">X</button></li>
            </ul>
          </section>
        </main>
      </div>
    )
  }
}
