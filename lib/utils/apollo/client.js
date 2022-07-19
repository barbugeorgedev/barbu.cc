import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client;

/* Get Apollo Client */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

console.log(process.env.BACKEND_URL)
/* Create Apollo Client */
// Update the GraphQL endpoint to any instance of GraphQL that you like
export function _createApolloClient() {
  return new ApolloClient({
      uri:  process.env.BACKEND_URL,
      cache: new InMemoryCache(),
  });
}


