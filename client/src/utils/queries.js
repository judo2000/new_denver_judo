import { gql } from '@apollo/client';

export const GET_CONTENTS = gql`
  query Query {
    contents {
      _id
      contentHead
      contentText
      page
      section
    }
  }
`;

export const GET_CONTENT_BY_ID = gql`
  query Query($id: String!) {
    contentById(_id: $id) {
      _id
      contentHead
      contentText
      page
      section
    }
  }
`;

export const GET_OUR_DOJO = gql`
  query Query($page: String!, $section: String!) {
    ourDojo(page: $page, section: $section) {
      _id
      contentHead
      contentText
      page
      section
    }
  }
`;

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
