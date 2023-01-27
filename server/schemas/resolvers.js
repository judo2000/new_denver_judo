const { Content, Instructor } = require('../models');
const resolvers = {
  Query: {
    // content: async (parent, { page, section }) => {
    //   let content = await Content.findOne({ page: page, section: section });
    //   return content;
    // },
    headInstructors: async (parent, { instructorType }) => {
      let headInstructors = await Instructor.find({
        instructorType: 'headInstructor',
      });
      return headInstructors;
    },
  },
  Mutation: {
    // addContent: async (parent, args) => {
    //   const content = await Content.create(args);
    //   return content;
    // },
    addInstructor: async (parent, args) => {
      const instructor = await Instructor.create(args);
      return instructor;
    },
  },
};

module.exports = resolvers;
