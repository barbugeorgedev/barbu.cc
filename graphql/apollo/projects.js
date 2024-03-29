import { getApolloClient } from "@apolloClient";
import { QUERY_ALL_PROJECTS } from "@graphql/queries/projects";

export async function getAllProjects() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_PROJECTS,
  });

  const posts = data?.data?.projects?.data;

  return posts;
}

export function searchTag(myArray, value) {
  for (var i = 0; i < myArray.length; i++) {
    if (
      myArray[i].attributes.name.toLowerCase().includes(value.toLowerCase())
    ) {
      return true;
    }
  }
}
