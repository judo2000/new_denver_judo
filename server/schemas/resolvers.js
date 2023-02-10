const { Content, Instructor } = require('../models');
const resolvers = {
  Query: {
    // content: async (parent, { page, section }) => {
    //   let content = await Content.findOne({ page: page, section: section });
    //   return content;
    // },
    ourDojo: async (parent, { page, section }) => {
      const ourDojo = await Content.find({
        page: 'home',
        section: 'ourDojo',
      });
      return ourDojo;
    },
    headInstructors: async (parent, { instructorType }) => {
      let headInstructors = await Instructor.find({
        instructorType: 'headInstructor',
      });
      return headInstructors;
    },
  },
  Mutation: {
    addContent: async (parent, args) => {
      const content = await Content.create(args);
      return content;
    },
    addInstructor: async (parent, args) => {
      const instructor = await Instructor.create(args);
      return instructor;
    },
    updateOurDojo: async (parent, { contentText }) => {
      try {
        const ourDojo = await Content.findOneAndUpdate(
          { page: 'home', section: 'ourDojo' },
          { contentText: contentText },
          { new: true }
        );
        return ourDojo;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = resolvers;
