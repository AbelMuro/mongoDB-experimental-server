const mongoose = require('mongoose');
const { config } = require('dotenv');

config();


async function connectDB() {
  const url = `mongodb+srv://${process.env.accountname}:${process.env.password}@cluster0.5k5vu.mongodb.net/${process.env.database}?retryWrites=true&w=majority&appName=${process.env.appName}`

    try{
      await mongoose.connect(url);
      console.log('You have connected to the database')
    }
    catch(error){
      console.log('error', error.message);
    }
}

module.exports = connectDB;