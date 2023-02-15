import { gql } from '@apollo/client';

// mutation to update page
export const UPDATE_CONTENT = gql`
  mutation updateContent(
    $id: String!
    $contentHead: String!
    $contentText: String!
  ) {
    updateContent(
      _id: $id
      contentHead: $contentHead
      contentText: $contentText
    ) {
      _id
      contentHead
      contentText
    }
  }
`;

export const UPDATE_INSTRUCTOR = gql`
  mutation UpdateInstructor(
    $instructorType: String!
    $instructorName: String!
    $instructorRank: String!
    $instructorImage: String
    $instructorBio: String!
    $id: String!
  ) {
    updateInstructor(
      instructorType: $instructorType
      instructorName: $instructorName
      instructorRank: $instructorRank
      instructorImage: $instructorImage
      instructorBio: $instructorBio
      _id: $id
    ) {
      _id
      instructorBio
      instructorName
      instructorRank
      instructorImage
      instructorType
    }
  }
`;
