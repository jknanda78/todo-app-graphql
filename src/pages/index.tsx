import React from "react";
import { InputField, InputRef } from "@components/input-field";
import TodoList from "@components/todo-list";
import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($summary: String!) {
    addTodo(summary: $summary) {
      message
    }
  }`;

type TodoProps = {};

const todoInput = React.createRef<InputRef>();

const TodoComponent: React.FunctionComponent<TodoProps> = (props) => {
  const [addTodo, { loading }] = useMutation(ADD_TODO, {
    onError: (err) => {
      console.log("addTodo:::onError:::err:::", err);
    }
  });
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodo({ variables: { summary: todoInput.current?.value } });
    todoInput.current.value = "";
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
              <InputField type="text" name="todo" ref={todoInput} defaultValue="" required />
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
