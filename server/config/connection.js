// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', false);
//     const conn = await mongoose.connect('mongodb://127.0.0.1/den-judo-DB', {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(`MongoDB connected : ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.set('strictQuery', false).connect('mongodb://127.0.0.1/den-judo-DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: true,
});

module.exports = mongoose.connection;
