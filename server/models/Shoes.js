const { Schema, model, Types } = require("mongoose");

const ShoesSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  category: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        index: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  overview: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    index: true,
  },
  specifications: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      img: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  stock: {
    type: Number,
    required: true,
    index: true,
  },
});

const Shoes = model("Shoes", ShoesSchema);

module.exports = Shoes;