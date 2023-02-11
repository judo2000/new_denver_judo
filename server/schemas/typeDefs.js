const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Content {
    _id: ID
    page: String
    section: String
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

  type FAQ {
    _id: ID
    question: String!
    answer: String!
    open: Boolean!
  }

  type Query {
    contents: [Content!]!
    contentById(_id: String!): Content
    ourDojo(page: String!, section: String!): [Content!]
    kano(page: String!, section: String!): [Content!]
    instructors: [Instructor!]!
    headInstructors(instructorType: String!): [Instructor!]
    assistantInstructors(instructorType: String!): [Instructor!]
    faqs: [FAQ!]!
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
    updateInstructor(
      _id: String!
      instructorType: String!
      instructorName: String!
      instructorRank: String!
      instructorImage: String
      instructorBio: String!
    ): Instructor
    updateContent(
      _id: String
      contentHead: String
      contentText: String
    ): Content
    addFAQ(_id: String, question: String!, answer: String!, open: Boolean): FAQ
  }
`;

module.exports = typeDefs;
