import { gql } from '@apollo/client';

export const GET_HEAD_INSTRUCTORS = gql`
  query HeadInstructor($instructorType: String!) {
    headInstructors(instructorType: $instructorType) {
      _id
      instructorName
      instructorRank
      instructorType
      instructorImage
      instructorBio
    }
  }
`;
