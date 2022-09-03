import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let client;

export function getApolloClient(forceNew) {
    if (!client || forceNew) {
        client = new ApolloClient({
            ssrMode: isServer,
            uri: process.env.BACKEND_URL,
            cache: new InMemoryCache().restore(windowApolloState || {}),
            // Default options to disable SSR for all queries.
            defaultOptions: {
                // Skip queries when server side rendering
                // https://www.apollographql.com/docs/react/data/queries/#ssr
                watchQuery: {
                    ssr: false
                },
                query: {
                    ssr: false
                }
                // Selectively enable specific queries like so:
                // `useQuery(QUERY, { ssr: true });`
            }
        });
    }

    return client;
}

