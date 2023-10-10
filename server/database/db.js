const mongoose = require("mongoose");
const DBConnection = async () => {
  const MONGODB_URI = `mongodb://user:filevortexdb@ac-89wkbay-shard-00-00.pi3bu4v.mongodb.net:27017,ac-89wkbay-shard-00-01.pi3bu4v.mongodb.net:27017,ac-89wkbay-shard-00-02.pi3bu4v.mongodb.net:27017/?ssl=true&replicaSet=atlas-8drh42-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};
module.exports = DBConnection;
