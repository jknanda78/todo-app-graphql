import { gql, useQuery } from "@apollo/client";

const GET_ALL_TODOS = gql`{
  getAllTodos {
    _id
    summary
  }
}`;

type ListProps = {};

type TodoModel = {
  _id: string;
  summary: string;
};

const TodoList: React.FunctionComponent<ListProps> = (props) => {
  const { data, error, loading } = useQuery(GET_ALL_TODOS);

  if (loading) { return <p>loading...</p> }
  if (error) { return <p>{error.message}</p> }

  if (data.getAllTodos?.length) {
    return (
      <ul>
        {
          data.getAllTodos.map((todo: TodoModel) => <li key={todo._id}>{todo.summary}</li>)
        }
      </ul>
    )
  } else {
    return <p>Write your first todo.</p>
  }
};

export default TodoList;
