import { gql } from '@apollo/client';

export const CATEGORY_POSTS_FIELDS = gql`
    fragment CategoryPostsFields on Category {
        posts {
            data {
                attributes {
                    title
                    slug
                    preview
                    categories {
                        data {
                            id
                            attributes {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const CATEGORIES_POSTS_FIELDS = gql`
    fragment CategoriesPostsFields on Post {
        categories {
            data {
                id
                attributes {
                    name
                    slug
                }
            }
        }
    }
`;

export const AUTHOR_POSTS_FIELDS = gql`
    fragment AuthorPostsFields on Post {
        author {
            data {
                id
                attributes {
                    name
                    linkedin
                    avatar {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;