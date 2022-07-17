import { getApolloClient } from "@apolloClient";
import { QUERY_ALL_CATEGORIES, QUERY_CATEGORY_BY_SLUG } from "@graphql/queries/categories";

export async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data?.categories?.data;

  return categories;
}

export async function getCategoryBySlug(slug) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_CATEGORY_BY_SLUG,
    variables: {
      slug,
    },
  });



  const category = data?.data?.findSlug?.data;

  return category;
}
