import { getApolloClient } from "@apolloClient";
import { QUERY_ALL_RECOMMENDED_BLOGS } from "@graphql/queries/recommendedBlogs";

export async function getAllRecommendedBlogs() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_RECOMMENDED_BLOGS,
  });

  const posts = data?.data?.recommendeds?.data;

  return posts;
}
