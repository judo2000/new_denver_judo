const { Content } = require('../models');
const resolvers = {
  Query: {
    content: async (parent, { page, section }) => {
      let content = await Content.findOne({ page: page, section: section });
      return content;
    },
  },
  Mutation: {
    addContent: async (parent, args) => {
      console.log(args);
      const content = await Content.create(args);
      return content;
    },
  },
};

module.exports = resolvers;
