const { Schema, model } = require('mongoose');

const instructorSchema = new Schema({
  instructorType: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  instructorRank: {
    type: String,
    require: true,
  },
  instructorImage: {
    type: String,
  },
  instructorBio: {
    type: String,
    required: true,
  },
});

const Instructor = model('Instructor', instructorSchema);

module.exports = Instructor;
