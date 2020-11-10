import { gql, useQuery } from "@apollo/client";

const query = gql`{
  todos {
    summary
  }
}`;
