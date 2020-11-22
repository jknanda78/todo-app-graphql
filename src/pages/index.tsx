import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_TODOS, ADD_TODO, DELETE_TODO } from "@gql";
import { InputField, InputRef } from "@components/input-field";
import TodoList from "@components/todo-list";
import Layout from "@components/layout";

// ref type - uncontrolled input component
const todoInput = React.createRef<InputRef>();

const TodoComponent: React.FunctionComponent = () => {
  // Get All Todos
  const { data, error, loading, refetch } = useQuery(GET_ALL_TODOS);
  // Add Todo Mutation
  const [addTodo, { loading: adding }] = useMutation(ADD_TODO, {
    onCompleted: () => refetch()
  });
  // Delete Todo Mutation
  const [deleteTodo, { loading: deleting }] = useMutation(DELETE_TODO, {
    onCompleted: () => refetch()
  });
  // Handler - add todo
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodo({ variables: { summary: todoInput.current?.value } });
    todoInput.current.value = "";
  };
  // Handler - delete todo
  const handleOnDelete = (e: React.SyntheticEvent, _id: string) => {
    deleteTodo({ variables: { _id } });
  }

  return (
    <Layout
     title="Todo App"
    >
      <>
        <section>
          <form onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="todo"></label>
              <InputField
                type="text"
                name="todo"
                ref={todoInput}
                defaultValue=""
                required
              />
            </p>
            <p>
              <button
                type="submit"
                value="Add"
                disabled={loading || adding}
              >
                Add
              </button>
            </p>
          </form>
        </section>
        <section>
          <TodoList
            data={data}
            error={error}
            loading={loading || deleting}
            onDelete={handleOnDelete}
          />
        </section>
      </>
    </Layout>
  );
}

export default TodoComponent;
