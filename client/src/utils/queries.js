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

export const GET_KANO = gql`
  query Query($page: String!, $section: String!) {
    kano(page: $page, section: $section) {
      _id
      contentHead
      contentText
      page
      section
    }
  }
`;

export const GET_INSTRUCTORS = gql`
  query Instructors {
    instructors {
      _id
      instructorBio
      instructorImage
      instructorName
      instructorRank
      instructorType
    }
  }
`;

export const GET_INSTRUCTOR_BY_ID = gql`
  query InstructorById($id: String!) {
    instructorById(_id: $id) {
      _id
      instructorBio
      instructorImage
      instructorName
      instructorRank
      instructorType
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

export const GET_INSTRUCTORS_BY_TYPE = gql`
  query InstructorsByType($instructorType: String!) {
    instructorsByType(instructorType: $instructorType) {
      _id
      instructorBio
      instructorImage
      instructorName
      instructorRank
      instructorType
    }
  }
`;

export const GET_FAQS = gql`
  query FAQS {
    faqs {
      _id
      answer
      question
      open
    }
  }
`;
