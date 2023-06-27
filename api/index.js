// 'mongodb+srv://vivekgupta:12345678Vivek9@cluster0.g51iyzl.mongodb.net/?retryWrites=true&w=majority'
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri =
  'mongodb+srv://vivekgupta:12345678Vivek9@cluster0.g51iyzl.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('connected to MongoDB');
  } catch {
    console.log('Error Vivke!');
  }
}

connect();

app.listen(8000, () => {
  console.log('server started on port 8000');
});
