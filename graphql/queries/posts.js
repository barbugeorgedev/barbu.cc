import { gql } from "@apollo/client";
import { CATEGORIES_POSTS_FIELDS, AUTHOR_POSTS_FIELDS } from '../fragments';

export const QUERY_ALL_POSTS = gql`
    ${CATEGORIES_POSTS_FIELDS}
    ${AUTHOR_POSTS_FIELDS}
    query AllPosts {
        posts(sort: "updatedAt:desc") {
            data {
                id
                attributes {
                    createdAt
                    publishedAt
                    updatedAt
                    title
                    content
                    slug
                    preview
                    seoTitle
                    ...CategoriesPostsFields
                    ...AuthorPostsFields
                }
            }
        }
    }
`;

export const QUERY_POST_BY_SLUG = gql`
    ${CATEGORIES_POSTS_FIELDS}
    ${AUTHOR_POSTS_FIELDS}
    query Post($slug: String!) {
        findSlug(modelName: "post", slug: $slug) {
            ... on PostEntityResponse {
                data {
                    id
                    attributes {
                        createdAt
                        publishedAt
                        updatedAt
                        title
                        content
                        slug
                        preview
                        seoTitle
                        ...CategoriesPostsFields
                        ...AuthorPostsFields
                    }
                }
            }
        }
    }
`;
