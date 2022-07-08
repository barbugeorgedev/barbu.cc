import { gql } from "@apollo/client";

export const QUERY_ALL_AUTHORS = gql`
    query Authors {
        authors {
            data {
                attributes {
                name
                email
                avatar {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                linkedin
                github
                siteUrl
                }
            }
        }
    }
`;

export const QUERY_AUTHOR_BY_ID = gql`
    query Author($id: ID) {
        author(id: $id) {
            data {
                attributes {
                name
                email
                avatar {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                linkedin
                github
                siteUrl
                }
            }
        }
    }
`;
