import { getApolloClient } from "@apolloClient";
import { QUERY_ALL_AUTHORS, QUERY_AUTHOR_BY_ID } from "@graphql/queries/authors";

export async function getAllAuthors() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_AUTHORS,
  });

  const authors = data?.data?.authors?.data;

  return authors;
}

export async function getAuthorsById(id) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_AUTHOR_BY_ID,
    variables: {
      id,
    },
  });

  const authors = data?.data;

  return authors;
}
