const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://muhammedslah098765:CBERV2drp57oNV4j@cluster0.7yd32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connnect(params) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

connnect();
app.listen(8000, () => {
  console.log("Server Started on 8000");
});
