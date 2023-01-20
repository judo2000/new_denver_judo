import { gql } from '@apollo/client';

// mutation to update page
export const UPDATE_PAGE = gql`
  mutation UpdatePage(
    $pageTitle: String!
    $pageHeading: String!
    $content: String!
  ) {
    updatePage(
      pageTitle: $pageTitle
      pageHeading: $pageHeading
      content: $content
    ) {
      pageTitle
      pageHeading
      content
    }
  }
`;

// export const CREATE_COURSE = gql`
//   mutation AddCourse(
//     $courseTitle: String!
//     $description: String!
//     $creator: String!
//   ) {
//     addCourse(
//       courseTitle: $courseTitle
//       description: $description
//       creator: $creator
//     ) {
//       _id
//       courseTitle
//       description
//     }
//   }
// `;
// export const ENROLL_IN_COURSE = gql`
//   mutation EnrollInCourse($courseId: String!) {
//     enrollInCourse(courseId: $courseId) {
//       _id
//       email
//       firstName
//     }
//   }
// `;

// export const DROP_COURSE = gql`
//   mutation DropCourse($courseId: String!) {
//     dropCourse(courseId: $courseId) {
//       enrolledCourses {
//         courseTitle
//         _id
//       }
//     }
//   }
// `;

// export const DELETE_COURSE = gql`
//   mutation Mutation($courseId: String!) {
//     deleteCourse(courseId: $courseId) {
//       courseTitle
//       _id
//       description
//     }
//   }
// `;
