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
