


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    

    const conn = await mongoose.connect("mongodb://localhost:27017", {
        dbName: "skyGoal",
      })
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);

  }
};

module.exports = connectDB;