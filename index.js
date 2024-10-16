//create server
// koneksikan ke express
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Product = require("./models/product.models.js");
const productRoutes = require("./routes/product.route.js");

//  koneksi database
mongoose
  .connect(
    "mongodb+srv://zunzun:marshmello@backenddb.3mcgk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    app.listen(3000, () => {
      console.info("server is running in port 3000");
    });

    console.info("connect to database");
  })
  .catch((error) => {
    console.info("connection failed");
  });

//  secara default express tidak bisa convrt ke json
//  gunakan method dibawah untuk conv ke json
//  unakan method dibawah untuk memasukan dari form url encoded dari api testing
//  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("HELLO FROM NODE API  Update");
});
