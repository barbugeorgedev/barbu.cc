import { gql } from "@apollo/client";


export const QUERY_TOP_MENU = gql`
    query TopMenu {
        global {
            data {
                attributes {
                    TopMenu {
                        name
                        link
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
                        link
                        target
                    }
                }
            }
        }
    }
`;