import { getApolloClient } from "@apolloClient";
import {QUERY_TOP_MENU, QUERY_FOOTER_MENU} from "@graphql/queries/globals";

export async function getTopMenu() {
  const apolloClient = getApolloClient();
  const data = await apolloClient.query({
    query: QUERY_TOP_MENU,
  });
  const menu = data?.data?.global?.data;

  return menu;
}


export async function getFooterMenu() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_FOOTER_MENU,
  });

  const menu = data?.data?.global?.data;

  return menu;
}