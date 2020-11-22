import React from "react";
import styles from "@styles/todo.module.css";

type ErrorModel = {
  message: string;
};

type TodoModel = {
  _id: string;
  summary: string;
};

type TodoList = {
  todos: Array<TodoModel>
};

type ListProps = {
  data: TodoList;
  error: ErrorModel;
  loading: boolean;
  onDelete: Function;
};

const TodoList: React.FunctionComponent<ListProps> = (props) => {
  const { data, error, onDelete, loading } = props;
  const handleOnDelete = (e: React.SyntheticEvent, _id) => {
    typeof onDelete === "function" && onDelete(e, _id);
  };

  if (loading) { return <p>loading...</p> }
  if (error) { return <p>{error.message}</p> }

  if (data.todos?.length) {
    return (
      <ul className={styles.todo}>
        {
          data.todos.map((todo: TodoModel) => {
            return (
              <li key={todo._id}>
                <p>
                  {todo.summary}
                </p>
                <div>
                  <button
                    className={styles.addTodo}
                    type="button"
                    value="Delete"
                    onClick={(e) => handleOnDelete(e, todo._id)}
                    disabled={loading}
                  />
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  } else {
    return <p>Write your first todo.</p>
  }
};

export default TodoList;
