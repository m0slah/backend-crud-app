require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/products.model");
const { message } = require("antd");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API server update");
});

app.post("/products", async (req, res) => {
  // const { name, price, quantity, image } = req.body;
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI, { connectTimeoutMS: 30000 })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
