import { gql } from "@apollo/client";


export const QUERY_ALL_MENUS = gql`
    query AllMenus {
        menu {
            data {
                id
                attributes {
                    item {
                        name
                        link
                        target
                    }
                }
            }
        }
    }
`;