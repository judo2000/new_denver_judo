const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Content {
    _id: ID
    page: String!
    section: String!
    sectionHeading: String
    sectionContent: String!
  }

  type Query {
    content(page: String): Content
  }

  type Mutation {
    addContent(
      page: String!
      section: String!
      sectionHeading: String
      sectionContent: String!
    ): Content
  }
`;

module.exports = typeDefs;
