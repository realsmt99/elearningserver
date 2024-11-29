

const mongoose = require("mongoose");
uri = process.env.URI || "mongodb://localhost:27017/elearning"
const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("Connected to mongoDB");
    } catch {
      console.error("Error while connecting mongoDB");
    }
  };

  module.exports = {connectDB};