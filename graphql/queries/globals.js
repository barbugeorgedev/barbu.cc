import { gql } from "@apollo/client";


export const QUERY_TOP_MENU = gql`
    query TopMenu {
        global {
            data {
                attributes {
                    TopMenu {
                        name
                        href
                        target
                    }
                }
            }
        }
    }
`;

export const QUERY_SEARCH_MENU = gql`
    query SearchMenu {
        global {
            data {
                attributes {
                    SearchMenu {
                        name
                        href
                        target
                    }
                }
            }
        }
    }
`;


export const QUERY_FOOTER_MENU = gql`
    query FooterMenu {
        global {
            data {
                attributes {
                    FooterMenu {
                        name
                        href
                        target
                    }
                }
            }
        }
    }
`;