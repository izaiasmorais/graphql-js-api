require("dotenv").config();

const moogoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = () => {
  return moogoose.connect(
    DATABASE_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (error) => {
      if (error) {
        console.log("Mongodb connection failed");
      } else {
        console.log("Mongodb connection successful");
      }
    }
  );
};

const db = moogoose.connection;

db.on("error", console.error.bind(console, "MongDB connection error"));

module.exports = connectDb;
