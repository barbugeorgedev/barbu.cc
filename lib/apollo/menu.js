import { getApolloClient } from "./client";
import {QUERY_ALL_MENUS} from "@/graphql/queries/menu";

export async function getAllMenus() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_MENUS,
  });

  const menu = data?.data?.menu?.data;

  return menu;
}
