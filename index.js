require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server update");
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
