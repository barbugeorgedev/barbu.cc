import { gql } from "@apollo/client";
import { CATEGORY_POSTS_FIELDS } from '../fragments';


export const QUERY_ALL_CATEGORIES = gql`
    ${CATEGORY_POSTS_FIELDS}
    query AllCategories {
        categories(sort: "updatedAt:desc") {
            data {
                id
                attributes {
                    slug
                    name
                    ...CategoryPostsFields
                }
            }
        }
    }
`;

export const QUERY_CATEGORY_BY_SLUG = gql`
    ${CATEGORY_POSTS_FIELDS}
    query Category($slug: String!) {
        findSlug(modelName: "category", slug: $slug) {
            ... on CategoryEntityResponse {
                data {
                    id
                    attributes {
                        slug
                        name
                        ...CategoryPostsFields
                    }
                }
            }
        }
    }
`;