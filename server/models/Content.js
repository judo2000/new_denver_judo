const { Schema, model } = require('mongoose');

const contentSchema = new Schema({
  page: {
    type: String,
    require: true,
  },
  section: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  contentHead: {
    type: String,
  },
  contentText: {
    type: String,
    required: true,
  },
});

const Content = model('Content', contentSchema);

module.exports = Content;
