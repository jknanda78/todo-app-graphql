import { gql, useQuery } from "@apollo/client";

const GET_TODOS = gql`{
  todos {
    id
    summary
  }
}`;

type ListProps = {};

type TodoModel = {
  id: string;
  summary: string;
};

const TodoList: React.FunctionComponent<ListProps> = (props) => {
  const { data, error, loading } = useQuery(GET_TODOS);

  if (loading) { return <p>loading...</p> }
  if (error) { return <p>{error.message}</p> }

  return (
    <ul>
      {
        data.todos.map((todo: TodoModel) => <li key={todo.id}>{todo.summary}</li>)
      }
    </ul>
  );
};

export default TodoList;
