import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`{
  todos {
    _id
    summary
  }
}`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($_id: ID!) {
    deleteTodo(_id: $_id) {
      message
    }
  }`;

export const ADD_TODO = gql`
  mutation AddTodo($summary: String!) {
    addTodo(summary: $summary) {
      message
    }
  }`;
