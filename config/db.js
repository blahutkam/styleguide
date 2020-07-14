const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }

  // mongoose
  //     .connect(db, {
  //         useNewUrlParsel: true,
  //         useCreateIndex: true,
  //         useFindAndModify: false
  //     })
  //     .then(() => console.log('MongoDB Connected'))
  //     .catch(err => {
  //         console.error(err.message);
  //         process.exit(1);
  //     });
};

module.exports = connectDB;
