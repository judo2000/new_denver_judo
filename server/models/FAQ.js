const { Schema, model } = require('mongoose');

const faqSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    require: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const FAQ = model('FAQ', faqSchema);

module.exports = FAQ;
