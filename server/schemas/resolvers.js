const { Content, Instructor, FAQ } = require('../models');
const resolvers = {
  Query: {
    contents: async (parent, { page, section }) => {
      const contents = await Content.find({}).sort({ _id: 1 });
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
    instructors: async () => {
      const instructors = await Instructor.find({});
      return instructors;
    },
    headInstructors: async (parent, { instructorType }) => {
      let headInstructors = await Instructor.find({
        instructorType: 'headInstructor',
      });
      return headInstructors;
    },
    assistantInstructors: async (parent, { instructorType }) => {
      let assistantInstructors = await Instructor.find({
        instructorType: 'assistantInstructor',
      }).sort({ instructorRank: 1 });
      return assistantInstructors;
    },
    faqs: async () => {
      const faqs = await FAQ.find({});
      return faqs;
    },
  },
  Mutation: {
    addContent: async (parent, args) => {
      const content = await Content.create(args);
      return content;
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
    addInstructor: async (parent, args) => {
      const instructor = await Instructor.create(args);
      return instructor;
    },
    updateInstructor: async (
      parent,
      {
        _id,
        instructorType,
        instructorName,
        instructorRank,
        instructorImage,
        instructorBio,
      }
    ) => {
      try {
        const instructor = await Instructor.findByIdAndUpdate(
          { _id },
          {
            instructorType,
            instructorName,
            instructorRank,
            instructorImage,
            instructorBio,
          },
          { new: true }
        );
        const updatedInstructor = await Instructor.findById({ _id });
        return updatedInstructor;
      } catch (error) {
        return error;
      }
    },
    addFAQ: async (parent, args) => {
      const faq = await FAQ.create(args);
      return faq;
    },
  },
};

module.exports = resolvers;
