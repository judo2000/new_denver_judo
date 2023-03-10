const { Schema, model } = require('mongoose');

const pageSchema = new Schema({
  pageTitle: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  sectionHeading: {
    type: String,
  },
  sectionSubHeading: {
    type: String,
  },
  sectionContent: {
    type: String,
    required: true,
  },
});

const Page = model('Page', pageSchema);

module.exports = Page;
