import { gql } from "@apollo/client";

export const QUERY_MENUS = gql`
    query Menu {
        menusMenus {
            data {
                attributes {
                    items {
                        data {
                            attributes {
                                title
                                target
                                url
                                parent{
                                    data {
                                        attributes {
                                            title
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
