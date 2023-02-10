const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Content {
    _id: ID
    page: String!
    section: String!
    contentHead: String!
    contentText: String!
  }

  type Instructor {
    _id: ID
    instructorType: String!
    instructorName: String!
    instructorRank: String!
    instructorImage: String
    instructorBio: String!
  }

  type Query {
    contents: [Content!]!
    ourDojo(page: String!, section: String!): [Content!]
    instructors: [Instructor!]!
    headInstructors(instructorType: String!): [Instructor!]
  }

  type Mutation {
    addContent(
      page: String!
      section: String!
      contentHead: String!
      contentText: String!
    ): Content
    addInstructor(
      instructorType: String!
      instructorName: String!
      instructorRank: String!
      instructorImage: String
      instructorBio: String!
    ): Instructor
    updateOurDojo(
      page: String!
      section: String!
      contentText: String!
    ): Content
  }
`;

module.exports = typeDefs;
