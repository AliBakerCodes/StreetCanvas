const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://ianjustinferris:MongoDB+021584@cluster0.z7up9zi.mongodb.net/?retryWrites=true&w=majority")

  console.log(`MongoDB connected! @ ${conn.connection.host}`)
};

module.exports = connectDB;
