const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter product NAME"],
    },
    quantity: {
      type: Number,
      require: true,
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },
    Image: {
      type: String,
      require: false,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
