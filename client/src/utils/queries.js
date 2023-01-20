import { gql } from '@apollo/client';

export const GET_SINGLE_PAGE = gql`
  query page($pageTitle: String!) {
    page(pageTitle: $pageTitle) {
      pageTitle
      pageHeading
      content
    }
  }
`;
