const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
