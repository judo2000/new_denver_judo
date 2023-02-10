const { Content, Instructor } = require('../models');
const resolvers = {
  Query: {
    contents: async (parent, { page, section }) => {
      const contents = await Content.find({});
      return contents;
    },
    contentById: async (parent, { _id }) => {
      const content = await Content.findById(_id);
      return content;
    },
    ourDojo: async (parent, { page, section }) => {
      const ourDojo = await Content.find({
        page: 'home',
        section: 'ourDojo',
      });
      return ourDojo;
    },
    kano: async (parent, { page, section }) => {
      const kano = await Content.find({
        page: 'home',
        section: 'kano',
      });
      return kano;
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
    updateContent: async (parent, { _id, contentHead, contentText }) => {
      try {
        const content = await Content.findByIdAndUpdate(
          { _id },
          { contentHead, contentText },
          { new: true }
        );
        const updatedContent = await Content.findById({ _id });
        return content;
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = resolvers;
