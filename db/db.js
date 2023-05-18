const mongoose = require("mongoose");
const uri =
  "mongodb+srv://odmaralt2:s-otumenjargal1@cluster1.hysvmww.mongodb.net/test?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is successfully connected.");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
