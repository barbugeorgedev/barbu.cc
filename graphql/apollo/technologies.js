import { getApolloClient } from "@apolloClient";
import { QUERY_ALL_TECHNOLOGIES } from "@graphql/queries/technolgies";

export async function getAllTechnologies() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_TECHNOLOGIES,
  });

  const posts = data?.data?.technologies?.data;

  return posts;
}

export function getTechByType(technologies, type) {
  return technologies.filter((tech) => tech?.attributes?.title === type);
}
