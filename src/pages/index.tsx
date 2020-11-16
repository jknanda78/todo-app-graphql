import React from "react";
import { InputField, InputRef } from "@components/input-field";
import TodoList from "@components/todo-list";
import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`{
  mutation addTodo(summary: String) {
    response
  }
}`;

type TodoProps = {};

const todoInput = React.createRef<InputRef>();

const TodoComponent: React.FunctionComponent<TodoProps> = (props) => {

  const [addTodo, { loading }] = useMutation(ADD_TODO);

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const summary = todoInput.current?.value || "";
    addTodo({variables: {summary}});
  };

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
              <InputField type="text" name="todo" ref={todoInput} required />
            </p>
            <p>
              <button
                type="button"
                value="Add"
                onClick={handleOnSubmit}
                disabled={loading}
              >
                Add
              </button>
            </p>
          </form>
        </section>
        <section>
          <TodoList />
        </section>
      </main>
    </div>
  );
}

export default TodoComponent;
