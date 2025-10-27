const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/sfe";

const connectDb = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log("error connecting to the database"));
};

module.exports = { connectDb };
