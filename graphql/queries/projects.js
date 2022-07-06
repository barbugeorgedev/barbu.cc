import { gql } from "@apollo/client";
import { ALL_PROJECTS_FIELDS } from '../fragments';

export const QUERY_ALL_PROJECTS = gql`
  query AllProjects {
    projects {
      data {
        id
        attributes {
          title
          description
          github
          landing
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
