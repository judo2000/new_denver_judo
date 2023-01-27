const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Instructor {
    _id: ID
    instructorType: String!
    instructorName: String!
    instructorRank: String!
    instructorImage: String
    instructorBio: String!
  }

  type Query {
    instructors: [Instructor!]!
    headInstructors(instructorType: String!): [Instructor!]
  }

  type Mutation {
    addInstructor(
      instructorType: String!
      instructorName: String!
      instructorRank: String!
      instructorImage: String
      instructorBio: String!
    ): Instructor
  }
`;

module.exports = typeDefs;
